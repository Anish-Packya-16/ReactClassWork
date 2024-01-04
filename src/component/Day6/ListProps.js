import React from 'react'

 function DisplayName(props) {

  return (
    <div>
      <p>{props.name}</p>
    </div>
  )
} 


export default function ListProps() {
    const animals=["bars","sofi","lion","tiger"]
    const result=animals.map((sup)=><DisplayName name={sup}></DisplayName>)

  return (
    <div>
     {result} 
    </div>
  )
}