
import Image from "next/image"
import Link from "next/link"
const MovieCard = ({movie}) => {

  return (
    <Link href={`/Movie/${movie.id}`}>
    <div className="bg-white shadow-sm rounded-md cursor-pointer">
      <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} width={500} height={500} className="rounded-t-md"/>
      <div className="px-6 py-2">
        <h1 className="font-bold text-xl mb-1">{movie.title}</h1>
        <p className="text-gray-700 text-base mb-1">{movie.release_date}</p>
      </div>
    </div>
    </Link>
  )
}
//https://image.tmdb.org/t/p/w500 // 

export default MovieCard