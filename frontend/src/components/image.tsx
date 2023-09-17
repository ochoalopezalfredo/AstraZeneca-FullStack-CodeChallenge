
import { ImageState } from "../types";
import '../App.css'
export const ImageComponent = ({ error, data }: Omit<ImageState, "loading">) => {

    return (
        <div className="image-viewer">
            {error && <div>Error: {error}</div>}
            {data && (
                <>
                    <img src={data.image} alt="Keanu Reaves" />
                    <p>Loaded from: {data.url}</p>
                </>)}
        </div>
    );
};