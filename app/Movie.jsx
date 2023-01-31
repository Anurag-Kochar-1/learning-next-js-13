import Link from 'next/link'
import React from 'react'

const Movie = ( {movie} ) => {
  return (
    <div>
        <h1> {movie.title} </h1>
        <h2> Release date </h2>
        <Link href={`/about`}>
            <img src='' alt={movie.title} />
        </Link>
    </div>
  )
}

export default Movie