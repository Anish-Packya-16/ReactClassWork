import React, { useEffect, useState } from "react";
function Hooks(){
    const [count,setCount]=useState(0);
    useEffect(()=>{
    document.title=`You clicked ${count} times`;});
    return(
        <div>
            <p>count {count} </p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}
export default Hooks;