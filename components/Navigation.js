import React from 'react'
import requests from '../utils/requests'

function Navigation() {
    return (
        <nav className="">
            {Object.entries(requests).map(([key, {title, url}])  => (
                <h2 key={key}>{title}</h2>
            ))}
        </nav>
    )
}

export default Navigation
