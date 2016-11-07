import React, {Component} from 'react'
import Button from '../component/button'

class Counter extends Component{
  render() {
    return(
      <div>
          <label>0</label>
          <Button />
          <Button />
      </div>
    )
  }
}
