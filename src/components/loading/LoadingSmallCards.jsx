import React from 'react'
import { LoadingComponent } from './LoadingComponent'

export const LoadingSmallCards = () => {
  return (
    <>
    <div className="animation__small__container">
      <div className="loading__small__cards">
          <div className="circle--animation"></div>
          <div className="circle--animation2"></div>
          <div className="circle--animation3"></div>
          <div className="circle--animation4"></div>
          <div className="circle--animation2"></div>
          <div className="circle--animation3"></div>
          <div className="circle--animation4"></div>
          <div className="circle--animation5"></div>
      </div>
    </div>
    {/* <div className="loading--small--cards">
      <div className="circle--animation"></div>
      <div className="circle--animation2"></div>
      <div className="circle--animation3"></div>
      <div className="circle--animation4"></div>
      <div className="circle--animation2"></div>
      <div className="circle--animation3"></div>
      <div className="circle--animation4"></div>
      <div className="circle--animation5"></div>
      </div> */}
      {/* <LoadingComponent /> */}
      {/* <div className="demo"></div> */}
    </>
  )
}
