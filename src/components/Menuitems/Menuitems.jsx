import Link from 'next/link'
import React from 'react'

export default function Menuitems({title, address, Icon}) {
  return (
    <div>
        <Link href={address}>
            <Icon className="sm:hidden text-2xl"  />
            <p className=" text-xl  font-medium sm:inline hidden">{title}</p>
        </Link>
    </div>
  )
}
