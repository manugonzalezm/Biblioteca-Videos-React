import React, { useState, useEffect } from 'react'
import DisplayGrid from './DisplayGrid'
import dataVideos from '../data/data'
import { useParams } from 'react-router-dom'

const DisplayGridContainer = () => {
    const { search } = useParams();
    console.log(search)

    const[videos, setVideos] = useState(dataVideos);
    console.log(videos)
    
    useEffect(() => {
        if(search){
            const filteredVideos = videos.filter(vid => (vid.nombre.toLowerCase()).includes(search.toLowerCase()) || (vid.autor.toLowerCase()).includes(search.toLowerCase()))
            setVideos(filteredVideos)
        }
    }, [search])
    

    return (
        <div className="container mt-5 pt-5">
            <DisplayGrid videos={videos} />
        </div>
    )
}

export default DisplayGridContainer