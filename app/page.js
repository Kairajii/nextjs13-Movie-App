import Movie from "./Movie";

export default async function Home() {

  const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=7d85e4ff0979f7040a3ee26d730b55af&language=en-US&page=1")
  const res = await data.json();
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid"> 
      {
        res?.results?.map((movie)=>(
          <div>
            <Movie
            key={movie.id}
            id={movie.id}
            title = {movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
              />
          </div>
        ))
      }
      </div>
    </main>
  )
}
