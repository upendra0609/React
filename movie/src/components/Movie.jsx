import React from 'react'

export default function Movie(props) {
  return (
    <>
    <div className='container col-4 col-md-3'>
    <div className="gallery">
                    <img src={props.Poster} alt="Cinque Terre" width="150" height="300"/>
                </div>
                <div className="desc">
                    <h3>{props.Title}</h3>
                    <h5>{props.Year}</h5>
                </div>
    </div>
    </>
  )
}
