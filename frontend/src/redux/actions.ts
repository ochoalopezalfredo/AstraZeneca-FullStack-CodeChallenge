import { ImageOptions } from "../types";

export const FETCH_IMAGE_REQUEST = 'FETCH_IMAGE_REQUEST';
export const FETCH_IMAGE_SUCCESS = 'FETCH_IMAGE_SUCCESS';
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

interface FetchImageFailureAction {
    type: typeof FETCH_IMAGE_FAILURE;
    payload: string;
}

export type ImageActionTypes = FetchImageRequestAction | FetchImageSuccessAction | FetchImageFailureAction

export const fetchImageRequest = (params: ImageOptions): FetchImageRequestAction => ({ type: FETCH_IMAGE_REQUEST, payload: params });
export const fetchImageSuccess = (data: ImageResponse): FetchImageSuccessAction => ({ type: FETCH_IMAGE_SUCCESS, payload: data });
export const fetchImageFailure = (error: string): FetchImageFailureAction => ({ type: FETCH_IMAGE_FAILURE, payload: error });