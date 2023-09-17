import fetch from 'node-fetch';
import { ImageOptions } from './types.js';

export const resolvers = {
    Query: {
        fetchImage: async (_, { options }) => {
            const url = getUrl(options)
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch image');
            }
            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const base64Data = buffer.toString('base64');
            const mimeType = response.headers.get('content-type');
            const image = `data:${mimeType};base64,${base64Data}`;

            return { image, url };
        },
    },
};

const getUrl = (options: ImageOptions) => {
    if (!options) throw new Error('Options missing');
    let { width = null, height, grayscale, young } = options;
    const params = []
    params.push(width)
    if (height) {
        params.push(height)
    }
    params.push(`${grayscale ? 'g' : ''}${young ? 'y' : ''}`)

    if (!width) throw new Error('Parameter `width` missing');
    return `https://placekeanu.com/${params.join('/')}`;
}

export default resolvers;
