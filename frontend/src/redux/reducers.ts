import { combineReducers } from 'redux';
import { FETCH_IMAGE_FAILURE, FETCH_IMAGE_REQUEST, FETCH_IMAGE_SUCCESS, ImageActionTypes } from './actions';

export type RootState = {
    image: ImageState;
};

type ImageData = { image: string, url: string }

export type ImageState = {
    data: ImageData
    error: string | null
}
const initialState: ImageState = {
    data: { image: '', url: '' },
    error: null
};

const imageReducer = (state = initialState, action: ImageActionTypes) => {
    switch (action.type) {
        case FETCH_IMAGE_REQUEST:
            return { ...state, error: null };
        case FETCH_IMAGE_SUCCESS:
            return { ...state, data: action.payload, error: null };
        case FETCH_IMAGE_FAILURE:
            return { ...state, error: action.payload };
        default:
            return state;
    }
};
const rootReducer = combineReducers({
    image: imageReducer,
});

export default rootReducer;