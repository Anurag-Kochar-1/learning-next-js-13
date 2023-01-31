import Movie from "./Movie"



export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`)
  const res = await data.json()


  return (
    <main>
      {res?.results?.map((movie) => {
        return <Movie movie={movie} />
      })}

    </main>
  )
}
