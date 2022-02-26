import React from 'react'
import moment from 'moment'

const DisplayItem = ({ video, getData }) => {
    const timeAgo = moment(video.subido).fromNow()

    return (
        <>
            <div className="card my-3 position-relative">
                <img src={`${process.env.PUBLIC_URL}/assets/images/${video.imagen}`} className="card-img-top" alt={video.name} />
                <div className="card-body">
                    <h5 className="card-title">
                        {video.nombre.substr(0, 35)}
                        {video.nombre.length>35 && <>...</>}
                    </h5>
                    <p className="card-text">{video.autor}</p>
                    <p className="card-text">{video.vistas} visualizaciones</p>
                </div>
                <div className="card-footer d-flex justify-content-evenly align-items-center">
                    <small className="text-muted fecha_subida">{timeAgo}</small>
                    <button type="button" className="btn btn-primary stretched-link" onClick={() => getData(video.src, video.nombre)} >
                        Ver video
                    </button>
                </div>
            </div>
        </>
    )
}

export default DisplayItem