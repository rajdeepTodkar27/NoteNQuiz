import { NextRequest, NextResponse } from 'next/server';
import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { StructuredOutputParser } from "@langchain/core/output_parsers";
import { z } from "zod";
import { RunnableSequence, RunnableParallel } from "@langchain/core/runnables";

const model1 = new ChatGoogleGenerativeAI({
    model: 'gemini-2.0-flash',
    temperature: 1,
    apiKey: process.env.GOOGLE_GENAI_API_KEY,

});

const model2 = new ChatGoogleGenerativeAI({
    model: 'gemini-2.5-flash',
    temperature: 1,
    apiKey: process.env.GOOGLE_GENAI_API_KEY
});

export async function POST(req: NextRequest) {
    try {
        const { text } = await req.json()


        function QuestionSchema() {
            return z.object({
                question: z.string(),
                options: z.array(z.string()),
                answer: z.number().int()
            });
        }

        const quizParser = StructuredOutputParser.fromZodSchema(z.array(QuestionSchema()));
        const noteParser = StructuredOutputParser.fromZodSchema(z.array(z.string()));

        const quizPrompt = ChatPromptTemplate.fromMessages([
            ["system", "You are a smart assistant."],
            [
                "user",
                `
Create multiple-choice questions from the given text.

Here is the text:
{text}

Instructions:
- Generate a list (array) of MCQs.
- Each question must have exactly four answer options.
- Only one option should be correct.
- The "answer" must be an integer index (0–3) indicating the correct option.
- Output must strictly follow the provided JSON schema.

{quiz_format_instructions}
    `.trim()
            ]
        ]);

        const notePrompt = ChatPromptTemplate.fromMessages([
            ["system", "You are a smart assistant."],
            ["user", `
Summarize the following text into clear, concise, and well-structured notes.
Here is the text: {text}

Instructions:
- Write notes in bullet-point format, grouped by topic or section.
- Avoid unnecessary details or repetition.

{note_format_instructions}
`]
        ]);


        const finalChain = RunnableParallel.from({
            notes: RunnableSequence.from([notePrompt, model1, noteParser]).withConfig({tags: ['notes']}),
            quizs: RunnableSequence.from([quizPrompt, model2, quizParser]).withConfig({tags: ['quizs']})
        });

        const result = await finalChain.invoke({ text, note_format_instructions: noteParser.getFormatInstructions(),quiz_format_instructions: quizParser.getFormatInstructions() })

        return NextResponse.json({ message: "successfully created the quizs and notes", data: result }, { status: 201 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}