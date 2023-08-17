import Image from "next/image";


export async function generateStaticParams(){
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=7d85e4ff0979f7040a3ee26d730b55af&language=en-US&page=1")
  const res = await data.json();

  return res?.results?.map((movie)=>({
    movie:toString(movie.id),
  }))
}


export default async function MovieDetail ({params}){
    const { movie} = params;
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=7d85e4ff0979f7040a3ee26d730b55af&language=en-US&page=1`,
    {next:{revalidate: 60}}
    )
    const res = await data.json();
    return (
        <div>
            <h2 className="text-yellow-600 font-bold text-3xl my-8">{res.title}</h2>
            <h2 className="text-lg text-gray-500 font-bold mb-2">{res.release_date}</h2>
            <h2 className="text-lg text-gray-500 font-bold mb-2">Runtime: {res.runtime} minutes</h2>
            <h2 className="text-green-600 font-bold mb-2">{res.status}</h2>
            <Image
            className="my-12"
             src={imagePath+res.backdrop_path}
                width={700} height={600}
                priority
            />
            <p className="text-gray-300">{res.overview}</p>
        </div>
    )
}