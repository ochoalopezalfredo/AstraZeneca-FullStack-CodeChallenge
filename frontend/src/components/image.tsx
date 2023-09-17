/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchImageRequest } from "../redux/actions";

import { ImageOptions } from "../types";
import { RootState } from "../redux/reducers";


export const ImageComponent = ({ ...props }: ImageOptions) => {
    const { data, error } = useSelector((state: RootState) => state.image)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchImageRequest(props))
    }, [])


    return (
        <div>
            {error && <div>Error: {error}</div>}
            {data && (
                <>
                    <img src={data.image} alt="Keanu Reaves" />
                    <p>{data.url}</p>
                </>)}
        </div>
    );
};