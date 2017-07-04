import React from 'react'
import '../App.css';

class DisplayMovie extends React.Component {

  render () {
    return (

      <div className='pa3 bg-black-05 ma3'>
        <div
          style={{
            backgroundImage: `url(${this.props.movie.imageUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />
        <div>
          <div className='movie'>
            <h3><span className='movie-title'>Movie Title: </span> {this.props.movie.description}&nbsp; </h3>
            <h2><span className='movie-title'>Rating: </span> { this.props.movie.avgRating }% </h2>
          </div>
        </div>
      </div>
    )
  }
}


export default DisplayMovie