import React, { Component } from 'react'
import './Employee.css'

export default class Employee extends Component {
  render() {
    return (
      <div className='employee'>
        <p>ID: {this.props.id}</p>
        <p>Name: {this.props.name}</p>
        <p>Department: {this.props.department}</p>
        <p>Role: {this.props.role}</p>
      </div>
    )
  }
}
