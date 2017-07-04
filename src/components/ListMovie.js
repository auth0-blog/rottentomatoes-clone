import React from 'react'
import DisplayMovie from './DisplayMovie'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import Nav from './Nav';

class ListMovie extends React.Component {

  render () {

    if (this.props.data.loading) {
      return (<div>Loading</div>)
    }

    return (
      <div>
        <Nav />
        <h3 className="text-center"> Latest Rotten Movie Ratings!</h3>
        <hr/>
        <div className="col-sm-12">
          {this.props.data.allMovies.map((movie, index) => (
            <div className="col-sm-4" key={index}>
              <DisplayMovie key={movie.id} movie={movie} refresh={() => this.props.data.refetch()} />
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const FeedQuery = gql`query allMovies {
  allMovies(orderBy: createdAt_DESC) {
    id
    description
    imageUrl
    avgRating
  }
}`

export default graphql(FeedQuery)(ListMovie)