
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { ImageComponent } from './components/image';
import { fetchImageRequest } from './redux/actions';
import { ImageOptions, RootState } from './types';


const App = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state: RootState) => state.image)
  const { register, handleSubmit, formState: { isValid }, } = useForm<ImageOptions>()



  const onSubmit = (values: ImageOptions) => {
    values.width = +values.width
    if (values.height) {
      values.height = +values.height
    }
    dispatch(fetchImageRequest(values))
  }


  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <label>Width</label>
        <input type='number'  {...register("width", { required: true })} />
        <label>Height</label>
        <input type='number'  {...register("height")} />
        <label>Grayscale: <input type="checkbox"   {...register("grayscale")} /> </label>
        <label>Young:   <input type="checkbox"  {...register("young")} /></label>

        <input disabled={!isValid} type="submit" value={'Generate image'} />
      </form>
      {loading && <p>LOADING IMAGE ...</p>}
      {!loading && <ImageComponent data={data} error={error} />}
    </div>
  )

}


export default App