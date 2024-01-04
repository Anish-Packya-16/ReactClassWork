import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <div>
       <h1> i am Studying at {this.props.collage}</h1>
      </div>
    )
  }
}