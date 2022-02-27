import React, { useState } from 'react'
import DisplayItem from './DisplayItem'
import ModalVideo from './ModalVideo'
import Pagination from './Pagination'

const DisplayGrid = ({ videos, loading }) => {
    const [modal, setModal] = useState(false)
    const [tempData, setTempData] = useState([])

    const getData = (src, nombre) => {
        let tempData = [src, nombre]
        setTempData(mod => [1, ...tempData])
        return setModal(true)
    }

    const [currentPage, setCurrentPage] = useState(1)
    const videosPerPage = 16

    /* Obtener los videos de la pagina correspondiente */
    const indexOfLastVideo = currentPage * videosPerPage
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage
    const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

    /* Cambiar Página */
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <>
            {
                loading ?
                    <h2 className='cargando'>Cargando...</h2>
                :
                    <>
                        <div className="row row-cols-4 mb-5">
                            {currentVideos.map(vid =>
                                <div className="col" key={vid.id}>
                                    <DisplayItem 
                                        video={vid} 
                                        getData={getData} 
                                    />
                                </div>
                            )}
                        </div>
                        <Pagination 
                            videosPerPage={videosPerPage} 
                            totalVideos={videos.length} 
                            paginate={paginate}
                        />
                        {
                            modal === true 
                            ? 
                                <ModalVideo 
                                    src={tempData[1]} 
                                    nombre={tempData[2]} 
                                    hide={() => setModal(false)} 
                                /> 
                            : ''
                        }
                    </>
            }
        </>
    )
}

export default DisplayGrid