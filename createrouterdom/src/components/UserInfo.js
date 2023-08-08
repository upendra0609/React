import React from 'react'
import {useParams} from 'react-router-dom'

export default function UserInfo() {

  const { userId,name } = useParams();

  return (
    <div>
      <h2>UserInfo of {userId}  name {name}</h2>
      </div>
  )
}
