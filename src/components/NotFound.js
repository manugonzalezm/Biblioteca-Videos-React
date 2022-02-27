import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='not_found'>
            <h2>Error 404. No se encontró la URL introducida</h2>
            <Link to="/">
                <button className="btn btn-outline-primary">Volver al inicio</button>
            </Link>
        </div>
    )
}

export default NotFound