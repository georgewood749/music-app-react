import React from 'react'
import { useParams } from 'react-router-dom'

export default function Album() {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h4>{params.name}</h4>
        </div>
    )
}
