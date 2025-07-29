import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './CSS/Page2.css'

export default class  extends Component {
  render() {
    return (
      <div className="main1">
        <h1>Hello This is Page2</h1>
         <br></br>
         <div className='link2'>
          <Link to="/">Go to home</Link>
         </div>
       
        <br></br>

        <Link to="/page1">Go to Page1</Link>
      </div>
    )
  }
}