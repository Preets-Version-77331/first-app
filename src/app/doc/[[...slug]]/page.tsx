'use client'
import React from 'react'
import { useParams } from "next/navigation"

const Doc = () => {
    const params = useParams();

    

  if (params.slug?.length === 2) {
    return  <div>Doc feature {params.slug[0]} and concept {params.slug[1]}</div>
  }
  else if (params.slug?.length === 3) {
    return  <div>Doc feature{params.slug[0]} and concept{params.slug[1]} example {params.slug[2] }</div>
  }
  return (
    <div>Doc</div>
  )
}

export default Doc  