import MovieCard from "./MovieCard";


const PopularMovie = ({movies}) => {
  return (
    <div className="bg-gray-700 container max-w-7xl mx-auto pb-10 px-4 text-center rounded-sm">
        <h1 className="text-white text-2xl p-5">What's is Popular</h1>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-6 lg:grid-col-8">      
            {movies.map(movie => <MovieCard movie={movie} key={movie.id}/>)}
        </div>

    </div>
  )
}

export default PopularMovie;