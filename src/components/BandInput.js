// Add BandInput component
import React, { Component } from 'react'
import {manageBand} from '../reducers/manageBand.js'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
        <label>Band Name:</label>
          <input
          type="text"
          onChange={this.handleOnChange}
          value={this.state.name}
          />
          <label>Add Band</label>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default BandInput
