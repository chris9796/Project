import React from 'react';

function Box(props){
  const clickMe = ()=>{
    alert("you finished at react Lecture")
  }
    return(
        <div className='box'>
        Box{props.num}{props.name}
        <br />
        <button onClick={clickMe}>클릭</button>
      </div>
    )
}
  export default Box