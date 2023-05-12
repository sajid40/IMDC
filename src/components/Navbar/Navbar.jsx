import React from 'react'
import Navbaritems from '../Navbaritems/Navbaritems'

export default function Navbar() {
  return (
    <div className="flex justify-center bg-amber-600 lg:text-lg p-4">
        <Navbaritems title="Trending" param="fetchTrending"/>
        <Navbaritems title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}
