import React from 'react'

export default function MultipleList() {
    const college=[{id:1, stuName:"sachin", age:26},
                  {id:2, stuName:"surya", age:24},
                  {id:3, stuName:"panvit", age:36},]
                  const display=college.map((col)=><li key={col.id}> {col.stuName} {col.age}</li>)
  return (
    <div style={{backgroundColor:"yellowgreen"}}>
      <h1>List of students</h1>
      {display}
    </div>
  )
}