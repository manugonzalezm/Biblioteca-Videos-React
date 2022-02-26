import React, { useState } from 'react'
import DisplayItem from './DisplayItem'
import ModalVideo from './ModalVideo'

const DisplayGrid = ({ videos }) => {
    const [modal, setModal] = useState(false)
    const [tempData, setTempData] = useState([])

    const getData = (src, nombre) => {
        let tempData = [src, nombre]
        setTempData(mod => [1, ...tempData])
        return setModal(true)

    }

    return (
        <>
            <div className="row row-cols-4 mb-5">
                {videos.map(vid =>
                    <div className="col" key={vid.id}>
                        <DisplayItem video={vid} getData={getData} />
                    </div>
                )}
            </div>
            {
                modal === true ? <ModalVideo src={tempData[1]} nombre={tempData[2]} hide={() => setModal(false)} /> : ''
            }
        </>

    )
}

export default DisplayGrid