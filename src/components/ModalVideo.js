import React from 'react'

const ModalVideo = (props) => {

    return (
        <div className="modal modal_style" show fade>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{props.nombre}</h5>
                        <button type="button" class="btn btn-danger close" onClick={props.hide}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    <iframe 
                        src={props.src} 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalVideo