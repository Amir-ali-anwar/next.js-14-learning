"use client"
import React from 'react'

const error = (error) => {
    console.log({error});
    return (
        <div>{error}</div>
    )
}

export default error