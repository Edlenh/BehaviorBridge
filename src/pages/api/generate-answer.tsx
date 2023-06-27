import type { NextApiRequest, NextApiResponse } from "next";
import { Configuration, OpenAIApi } from "openai";


type ResponseData ={
    text: string
}

interface GenerateNextApiRequest extends NextApiRequest {
    body:{
    prompt: string;
    }
}

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})

const openai = new OpenAIApi(configuration)

export default async function handler(
    req: GenerateNextApiRequest,
    res: NextApiResponse<ResponseData>
){
    const prompt = req.body.prompt;
    if(!prompt || prompt === ''){
        return new Response('Please input prompt', {status:400})
    }

    const aiResult = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: `As a behavioral specialist please take the user's ${prompt} 
        and give them non medical advice on how to change the prompts behavior, keep in mind
        that this is a parent trying to help their own child, please 
        only give at most two lines back. ` ,
        temperature: 0.9,
        max_tokens: 2000,
        frequency_penalty: 0.5,
        presence_penalty: 0
    });

    const response = aiResult.data.choices[0].text?.trim() || 'Sorry, there was an error';
    res.status(200).json({text:response})
}