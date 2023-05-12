"use client"
import Link from 'next/link'
import React from 'react'
import {useSearchParams} from "next/navigation";

export default function Navbaritems({title,param}) {

  const searchParams =useSearchParams();
  const genre = searchParams.get("genre");
  return (
    <div className="">
        <Link className={`m-4 hover:text-white font-semibold p-2 ${genre && genre === param && "underline underline-offset-8 decoration-4 decoration-white rounded-lg "  }`} href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}
