// import { buildNestedPages, getPaths } from '../../lib/content'
import { NextApiHandler } from "next";
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


const openAi: NextApiHandler = async (req, res) => {
    const { prompt, size } = req.body;

    const imageSize =
        size === 'small' ? '256x256' : size === 'medium' ? '512x512' : '1024x1024';

    try {
        const response = await openai.createImage({
            prompt,
            n: 1,
            size: imageSize,
        });

        console.log('data.data[0]', response.data)
        const imageUrl = response.data.data[0].url;
        res.status(200).json({
            success: true,
            data: imageUrl,
        });
    } catch (error) {

        console.log(error);


        res.status(400).json({
            success: false,
            error: 'The image could not be generated',
        });
    }

}

export default openAi