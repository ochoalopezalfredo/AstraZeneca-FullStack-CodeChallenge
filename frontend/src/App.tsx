
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ImageComponent } from './components/image';
import { fetchImageRequest } from './redux/actions';
import { ImageOptions, RootState } from './types';
import { Box, Button, Card, CardHeader, Center, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Spinner, Switch } from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'

type FormData = {
  width: number,
  height?: number,
  grayscale: number,
  young: number,
  square: number
}

const App = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state: RootState) => state.image)
  const { watch, control, handleSubmit, formState: { isValid, errors } } = useForm<FormData>()

  const squareImage = watch('square');

  const onSubmit = ({ square, ...values }: FormData) => {
    const params = values as unknown as ImageOptions
    if (squareImage) {
      params.height = undefined
    }
    dispatch(fetchImageRequest(params))
  }

  return (
    <Center>
      <Box p={50} w={'80%'} >
        <Card py={10} px={20}>
          <CardHeader px={0}>
            <Heading >Keanu Reeves image generator</Heading>
          </CardHeader>
          <Controller
            name="width"
            control={control}
            rules={{
              required: true,
              max: 1000,
              min: 1
            }}
            render={({ field }) =>
              <FormControl>
                <FormLabel>Width</FormLabel>
                <Flex>
                  <NumberInput maxW={1000} mr={10} {...field}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider
                    max={1000}
                    flex='1'
                    focusThumbOnChange={false}
                    {...field}
                  >
                    <SliderTrack>
                      <SliderFilledTrack bg='blue.500' />
                    </SliderTrack>
                    <SliderThumb bg='blue.500' fontSize='sm' boxSize='32px' />
                  </Slider>
                </Flex>
                <FormHelperText>{errors.width?.message}</FormHelperText>
              </FormControl>
            }
          />

          {!squareImage && <Controller
            name="height"
            control={control}
            rules={{
              required: !!!squareImage,
              max: 1000,
              min: 1
            }}
            render={({ field }) =>
              <FormControl >
                <FormLabel>Height</FormLabel>
                <Flex>
                  <NumberInput maxW={1000} mr={10} {...field}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <Slider

                    max={1000}
                    flex='1'
                    focusThumbOnChange={false}
                    {...field}
                  >
                    <SliderTrack>
                      <SliderFilledTrack bg='blue.500' />
                    </SliderTrack>
                    <SliderThumb bg='blue.500' fontSize='sm' boxSize='32px' />
                  </Slider>
                </Flex>
                <FormHelperText>{errors.width?.message}</FormHelperText>
              </FormControl>
            }
          />}
          <Controller
            name="square"
            control={control}
            render={({ field }) =>
              <FormControl>
                <Flex alignItems={'center'}>
                  <FormLabel m={0} mr={10}>Square image</FormLabel>
                  <Switch   {...field} />
                </Flex>
              </FormControl>
            }
          />
          <Controller
            name="grayscale"
            control={control}
            render={({ field }) =>
              <FormControl>
                <Flex alignItems={'center'}>
                  <FormLabel m={0} mr={10}>Grayscale</FormLabel>
                  <Switch   {...field} />
                </Flex>
              </FormControl>
            }
          />
          <Controller
            name="young"
            control={control}
            render={({ field }) =>
              <FormControl>
                <Flex alignItems={'center'}>
                  <FormLabel m={0} mr={16}>Young </FormLabel>
                  <Switch  {...field} />
                </Flex>
              </FormControl>}
          />
          <Button mt={20} colorScheme='blue' isDisabled={!isValid} onClick={handleSubmit(onSubmit)} >Generate imagen</Button>
        </Card>
        <Divider />

        <ImageComponent data={data} error={error} loading={loading} />
      </Box>
    </Center>
  )

}


export default App