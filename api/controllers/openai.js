const dotenv = require('dotenv');
dotenv.config();

const { OpenAI } = require("openai");
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});



const recipeCompletion = async (request) => {
    const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [{
            "role": "system",
            "content": "you are a helpful assistant specialized in building recipes that are healthy and protein rich. You will receive a list of ingredients and a time limit and generate easy step by step recipes that can be created using those parameters and also give the nutrional facts for the meal."
        },
        {
            "role": "user",
            "content": request
        }],
        temperature: Math.random() * (1.5 - 1.2) + 1.2,
        max_tokens: 1130,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    return completion.choices[0].message.content;
};

module.exports = {
    recipeCompletion
};
