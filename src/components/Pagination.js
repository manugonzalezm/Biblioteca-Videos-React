import React from 'react'

const Pagination = ({ videosPerPage, totalVideos, paginate }) => {
    const pageNumbers = []

    for(let i=1; i<= Math.ceil(totalVideos / videosPerPage); i++){
        pageNumbers.push(i);
    }


    return (
        <nav className='d-flex justify-content-center align-items-center mb-5'>
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <button className='page-link' onClick={() => paginate(number)}>
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination