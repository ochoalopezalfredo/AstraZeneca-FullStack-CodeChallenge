export interface ImageOptions {
    width: number;
    height?: number;
    young?: boolean;
    grayscale?: boolean;
}

export type ImageData = { image: string, url: string }

export type RootState = {
    image: ImageState;
};

export type ImageState = {
    data: ImageData | null
    error: string | null,
    loading: boolean
}