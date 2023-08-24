import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

function ReadMore() {
    const { id } = useParams()
    console.log(id);
    const url = 'http://localhost:3000/recipes/' + id
  return (
    <div>
      
    </div>
  )
}

export default ReadMore