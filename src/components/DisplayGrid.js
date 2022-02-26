import React from 'react'
import DisplayItem from './DisplayItem'

const DisplayGrid = ({ videos }) => {
    return (
        <div className="row row-cols-4 mb-5">
            {videos.map(vid => 
                <div className="col" key={vid.id}>
                    <DisplayItem video={vid} />
                </div>
            )}
            
        </div>
    )
}

export default DisplayGrid