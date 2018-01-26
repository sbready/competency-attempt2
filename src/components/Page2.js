import React from 'react'

export default function Page2(props) {
    return <h1>{props.match.params.id}</h1>
}