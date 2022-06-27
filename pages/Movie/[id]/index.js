import axios from 'axios'
import Image from 'next/image';
import Meta from '../../../components/Meta';

const movieDetail = ({movie}) => {

  return (
    <div className='container max-w-4xl mx-auto pt-1'>
        <Meta title={movie.title}/>
        <div className='p-1'>
            <Image src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} width={700} height={400} className="rounded-t-md"/>
        </div>
        <h1 className='font-bold text-2xl my-2'>{movie.title}</h1>
        <p className='text-gray-700 text-sm mt-4'>{movie.overview}</p>
        <p className='text-gray-700 text-sm mt-5'>Genres : <span className='font-bold'>
            {movie.genres.map(gen => gen.name).join(', ')}</span></p>
        <p className='text-gray-700 text-sm'> Date : <span className='font-bold'>{movie.release_date}</span></p>
        
    </div>
  )
}
export async function getStaticProps(context){
    const {id} = context.params;
    const res = await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const movie = res.data;
    return{
        props:{movie}
    }

}
export async function getStaticPaths(){
    const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
    const movies = res.data.results
    const ids = movies.map(movie => movie.id)
    const paths = ids.map(id =>({ params: {id: id.toString()}}));
    return{
        paths,
        fallback:false
    }
}

export default movieDetail