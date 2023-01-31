import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Movie = ({ movie }) => {
    return (
        <div className='rounded-md flex flex-col justify-start items-center p-1 my-3'>
            <h1 className=''> {movie.title} </h1>
            <h2 className=''> {movie.release_date} </h2>
            <Link href={`/${movie.id}`}>
                <Image
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    alt={movie.title}
                    width={800}
                    height={800}
                />
            </Link>
        </div>
    )
}

export default Movie