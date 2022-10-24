import { useState } from 'react'
import React from 'react'
import LifeCycle from './component/LifeCycle'
import FunctionBelanja from './component/FunctionBelanja'

export default class App extends React.Component {
  
  constructor () {
    super()
    this.state = {
      showLifecycle:true,
      showFunction:true
    }
  }

  render(){
  return (
    <div>
  
    <button onClick={()=>this.setState({showLifecycle:false})}>
      Hapus Lifecycle
    </button>

    {this.state.showLifecycle
    ?
      <>
      <LifeCycle/>
      </>
    :null}
    <br />
      
    <button onClick={()=>this.setState({showFunction:false})}>
      Hapus Function
    </button>

    {this.state.showFunction
    ?
      <>
      <FunctionBelanja/>
      </>
    :null}
  
    
    </div>
  )
  }
}


