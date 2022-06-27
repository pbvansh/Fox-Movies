import Hero from '../components/Hero'
import axios from 'axios'
import PopularMovie from '../components/PopularMovie';
//discover/movie?sort_by=popularity.desc
// https://api.themoviedb.org/3/movie/popular?api_key=<<>>&language=en-US&page=1
export default function Home({Movies}) {

  return (
    <div>
      <Hero/>
      <PopularMovie movies={Movies.results}/>
    </div>
  );
}

export async function getStaticProps(){
  const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const Movies = res.data
  return{
    props:{ Movies }
  }
}