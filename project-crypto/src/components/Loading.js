import React from 'react'

const Loading = () => {
    return (
        <div className='container d-flex justify-content-center'>
            <h1 className='text-success'>Loading ...</h1>
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading
