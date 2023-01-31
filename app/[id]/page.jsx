import Image from 'next/image'
import React from 'react'

const MoviePage = async ({ params }) => {
    const { id } = params

    const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`, {next: {revalidate: 0}})
    const res = await data.json()


    return (
        <div>
            <h2 className='text-2xl'> {res.title} </h2>
            <h2 className='text-lg'> {res.release_date}  </h2>
            <h2> Runtime: {res.runtime} minutes </h2>
            <h2 className='bg-green-600 inline-block my-2 py-2 px-4 rounded-md text-white text-sm'> Status : {res.status} </h2>
            <Image
                src={`https://image.tmdb.org/t/p/original${res.poster_path}`}
                alt={res.title}
                width={800}
                height={800}
                priority
                draggable="false"
            />

            <p className='my-3'> {res.overview} </p>
        </div>
    )
}

export default MoviePage