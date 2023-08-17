import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
const Movie = ({id,title,poster_path,release_date}) => {
    const imagePath = "https://image.tmdb.org/t/p/original";
  return (
    <div className="border-blue-400 border-2 py-5 px-4">
        <h1 className="text-2xl font-bold text-yellow-600 mb-3">{title}</h1>
        <Link href={`/${id}`}>
            <Image src={imagePath+poster_path} width={400} height={400} alt={title}/>
        </Link>
        <div>
            <p className="text-gray-500 font-bold my-6 text-center">{release_date}</p>
           
        </div>
    </div>
  )
}

export default Movie