import fetch from 'node-fetch';

export const resolvers = {
    Query: {
        fetchImageUrl: async (_, { options }) => {
            let { width, height, grayscale, young } = options;
            if (!width) throw new Error('Parameter `width` missing');
            const imageUrl = `https://placekeanu.com/${width}${height && `/${height}`}/${grayscale && 'g'}${young && 'y'}`;
            const response = await fetch(imageUrl); // check if the image exist 
            if (!response.ok) {
                throw new Error('Failed to fetch image');
            }

            return { url: imageUrl }
        },
        /*
        * process to demonstrate use of the resolver, otherwise the backend would have no logical function.
        */
        fetchImage: async (_, { options }) => { // only to use the backend , 
            let { width, height, grayscale, young } = options;
            if (!width) throw new Error('Parameter `width` missing');
            const imageUrl = `https://placekeanu.com/${width}${height && `/${height}`}/${grayscale && 'g'}${young && 'y'}`;
            const response = await fetch(imageUrl);// download the image if exist 
            if (!response.ok) {
                throw new Error('Failed to fetch image');
            }

            const arrayBuffer = await response.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);
            const base64Image = buffer.toString('base64');
            return { image: base64Image };
        },
    },
};

export default resolvers;
