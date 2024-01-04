import React, { useState } from 'react'

export default function DynamicRendering() {
 const [x]=useState(89)
    return ( 
        x>10? <p>the value is greater than 10</p>: 
        <p>the value is less than 10</p>

   
  )
}