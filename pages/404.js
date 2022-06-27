import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFound = () => {
    const route = useRouter()
    useEffect(()=>{
        const timer  = setTimeout(() => {
            route.push('/')
        }, 3000);
        return()=> clearTimeout(timer)
    },[])
  return (
    <div className="flex flex-col items-center justify-center mt-60">
        <span className="font-bold text-teal-600 text-6xl">404</span>
        <h1 className="from-neutral-600 text-xl text-teal-800 mt-3">The page you're looking for dosen't exist.</h1>
        <Link href={'/'}>
         <button className="bg-blue-100 text-teal-600 mt-5 font-semibold px-6 py-2 text-sm">
            GO to Home
         </button>
        </Link>
    </div>
  )
}

export default NotFound;