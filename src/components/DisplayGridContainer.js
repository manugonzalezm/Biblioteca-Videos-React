import React, { useState, useEffect } from 'react'
import DisplayGrid from './DisplayGrid'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DisplayGridContainer = () => {
    const { search } = useParams();

    const[videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true)
            const res = await axios.get('https://my-json-server.typicode.com/manugonzalezm/Biblioteca-Videos-React/videos')
            if(search){
                const filteredVideos = res.data.filter(vid => (vid.nombre.toLowerCase()).includes(search.toLowerCase()) || (vid.autor.toLowerCase()).includes(search.toLowerCase()))
                setVideos(filteredVideos)
                setLoading(false)
            } else{
                setVideos(res.data)
                setLoading(false)
            }
        }

        fetchVideos()

    }, [search])

    return (
        <div className="container mt-5 pt-5">
            <DisplayGrid videos={videos} loading={loading}/>
        </div>
    )
}

export default DisplayGridContainer