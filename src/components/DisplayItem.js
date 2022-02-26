import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const DisplayItem = ({ video }) => {
    const timeAgo = moment(video.subido).fromNow()

    return (
        <Link to="/search/charlie">
            <div class="card my-3">
                <img src={`${process.env.PUBLIC_URL}/assets/images/${video.imagen}`} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">
                        {video.nombre.substr(0, 35)}
                        {video.nombre.length>35 && <>...</>}
                    </h5>
                    <p class="card-text">{video.autor}</p>
                    <p class="card-text">{video.vistas} visualizaciones</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">{timeAgo}</small>
                </div>
            </div>
        </Link>
    )
}

export default DisplayItem