import Link from 'next/link'
import React from 'react'

export default function Menuitems({title, address, Icon}) {
  return (
    <div>
        <Link href={address}>
            <Icon className="sm:hidden mx-2 text-lg"  />
            <p className=" text-xl mx-2 font-medium sm:inline hidden">{title}</p>
        </Link>
    </div>
  )
}
