import React from 'react'
import DisplayItem from './DisplayItem'

const DisplayGrid = ({ videos }) => {
    return (
        <div className="row">
            {videos.map(vid => 
                <div className="col-3" key={vid.id}>
                    <DisplayItem video={vid} />
                </div>
            )}
            
        </div>
    )
}

export default DisplayGrid