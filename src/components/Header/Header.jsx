import React from 'react'
import Menuitems from '../Menuitems/Menuitems'
import {AiFillHome} from 'react-icons/ai'
import {AiFillInfoCircle} from 'react-icons/ai'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="flex justify-between items-center m-5">
        <div className="flex ">
            <div className=" hover:text-amber-600">
                <Menuitems title="HOME" address= "/" Icon={AiFillHome}/>

            </div>

            <div className="hover:text-amber-600">
                <Menuitems title="About" address= "/about" Icon={AiFillInfoCircle}/>

            </div>

        </div> 

        <div>

            <Link href="/"><span className=" text-3xl bg-amber-600 px-2 py-1 rounded-md font-medium">IMDC</span></Link>

        </div>
    </div>
  )
}
