import React from 'react'
import { useLocation } from 'react-router-dom'

const ListLink = () => {
  const location=useLocation()
  const data1=location.state;
  let url="https://m.imdb.com/title/";
  return (
    <>
      <h1 style={{
        color: 'white', display: 'flex', alignItems: 'center',
        justifyContent: 'center',marginTop:'50px'}}>Saxlanilan filmlerin listesi</h1>
        <p >{
            data1.map((item,key)=>{
              return(
                <a href={`${url+item.imdbID} `} ><p key={key} style={{color:'white'}}>{item}</p></a>
              )
            })
        }</p>
    </>
  )
}

export default ListLink