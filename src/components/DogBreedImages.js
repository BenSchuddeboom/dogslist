import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class DogBreedImages extends Component {

  render() {
    const {images} = this.props
    return (
      <div className="dog-breed-images">
        <h1>Dog Breed Images</h1>

        This page will show images of the { this.props.breed } breed.

        {<div>
            { images && images.map(url => <img src={ url } alt="Dog" />) }
            { !images && 'Loading...' }
        </div> }

        <Link to="/">Go back to the index</Link>
      </div>
    )
  }
}
