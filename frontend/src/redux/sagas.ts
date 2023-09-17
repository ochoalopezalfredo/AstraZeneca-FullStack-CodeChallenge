import { all } from 'redux-saga/effects';
import { call, put, takeLatest } from "redux-saga/effects";
import client from "../graphql/client";
import { FetchImageRequestAction, fetchImageSuccess, fetchImageFailure, fetchImageLoading } from "./actions";
import { GET_IMAGE } from '../graphql/queries';

function* handleFetchImage(action: FetchImageRequestAction) {
    yield put(fetchImageLoading(true))
    try {
        const params = {
            query: GET_IMAGE,
            variables: { options: action.payload }
        }
        const { data } = yield call(client.query, params);
        yield put(fetchImageSuccess(data.fetchImage));
    } catch (error: any) {
        yield put(fetchImageFailure(error.message));
    }
    yield put(fetchImageLoading(false))

}


function* rootSaga() {
    yield all([
        takeLatest('FETCH_IMAGE_REQUEST', handleFetchImage)
    ]);
}


export default rootSaga;