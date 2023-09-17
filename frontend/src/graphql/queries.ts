import { gql } from "@apollo/client";

export const GET_IMAGE = gql`
    query FetchImage($options: ImageOptions) {
        fetchImage(options: $options) {
            url
            image
        }
    }
`