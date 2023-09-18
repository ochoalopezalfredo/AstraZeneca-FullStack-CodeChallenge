
import { ImageState } from "../types";
import { Box, Card, Image, Spinner, Text } from "@chakra-ui/react";
export const ImageComponent = ({ error, data, loading }: ImageState) => {

    return (
        <Box mt={10} >
            {error && <Text size={'md'}  >Error: {error}</Text>}
            {loading &&
                <ImageContainer>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </ImageContainer>
            }
            {data && !loading && (
                <ImageContainer>
                    <Image objectFit={'contain'} src={data.image} alt='Keanu Reeves' />
                    <Text size={'sm'} color={'dimgray'} >Generated from: {data.url}</Text>
                </ImageContainer>
            )}
        </Box >
    );
};

const ImageContainer = ({ children }: { children: JSX.Element | JSX.Element[] }) =>
    <Card minH={80} p={20} justifyContent={'center'} alignItems={'center'}>
        {children}
    </Card>