import React from 'react'
import { useParams } from 'react-router-dom'
export default function Profile() {
    const param = useParams()
    console.log(param)
  return (
    <div>Profile de {param.id}</div>
  )
}
