import { ImageOptions } from "../types";

export const FETCH_IMAGE_REQUEST = 'FETCH_IMAGE_REQUEST';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
export const FETCH_IMAGE_LOADING = 'FETCH_IMAGE_LOADING';
export const FETCH_IMAGE_FAILURE = 'FETCH_IMAGE_FAILURE';


interface ImageResponse {
    image: string, url: string
}
export interface FetchImageRequestAction {
    type: typeof FETCH_IMAGE_REQUEST;
    payload: ImageOptions;
}

interface FetchImageSuccessAction {
    type: typeof FETCH_IMAGE_SUCCESS;
    payload: ImageResponse;
}
interface FetchImageLoadingAction {
    type: typeof FETCH_IMAGE_LOADING;
    payload: boolean;
}

interface FetchImageFailureAction {
    type: typeof FETCH_IMAGE_FAILURE;
    payload: string;
}

export type ImageActionTypes = FetchImageRequestAction | FetchImageSuccessAction | FetchImageFailureAction | FetchImageLoadingAction

export const fetchImageRequest = (payload: ImageOptions): FetchImageRequestAction => ({ type: FETCH_IMAGE_REQUEST, payload });
export const fetchImageSuccess = (payload: ImageResponse): FetchImageSuccessAction => ({ type: FETCH_IMAGE_SUCCESS, payload });
export const fetchImageLoading = (payload: boolean): FetchImageLoadingAction => ({ type: FETCH_IMAGE_LOADING, payload });
export const fetchImageFailure = (payload: string): FetchImageFailureAction => ({ type: FETCH_IMAGE_FAILURE, payload });