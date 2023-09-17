const typeDefs = `#graphql
  type Image {
    url: String
    image: String
  }

  input ImageOptions {
    width: Int!
    height: Int
    young: Boolean
    grayscale: Boolean
  }

  type Query {
    fetchImage(options: ImageOptions): Image
  }
`;

export default typeDefs;