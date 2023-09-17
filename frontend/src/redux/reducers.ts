import { combineReducers } from 'redux';
import { FETCH_IMAGE_FAILURE, FETCH_IMAGE_LOADING, FETCH_IMAGE_REQUEST, FETCH_IMAGE_SUCCESS, ImageActionTypes } from './actions';
import { ImageState } from '../types';

const initialState: ImageState = {
    data: null,
    error: null,
    loading: false
};

const imageReducer = (state = initialState, action: ImageActionTypes) => {
    switch (action.type) {
        case FETCH_IMAGE_REQUEST:
            return { ...state, error: null };
        case FETCH_IMAGE_SUCCESS:
            return { ...state, data: action.payload, error: null };
        case FETCH_IMAGE_FAILURE:
            return { ...state, error: action.payload };
        case FETCH_IMAGE_LOADING:
            return { ...state, loading: action.payload };

        default:
            return state;
    }
};
const rootReducer = combineReducers({
    image: imageReducer,
});

export default rootReducer;