import React, { useState } from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'

const images=[
    "https://drive.google.com/uc?export=view&id=1T9vUWetDxr16jfIPNL4N02OOjtdoFSjn", 
    "https://drive.google.com/uc?export=view&id=1TIBX3kpaIv_9hxli5M1Okgr6Nof3iMDI",
    "https://drive.google.com/uc?export=view&id=1TPGiWfl0WpOheZTdemjJOJN8TcGcV-0R",
    "https://drive.google.com/uc?export=view&id=1TEBO4eaMmhSDLQsLRyhMKSFMnaYVjOoW",
    "https://drive.google.com/uc?export=view&id=1T04tHUezZqkMzoL_MGiBhVseJiwi85wY",
    "https://drive.google.com/uc?export=view&id=1SfdU2fs2OhgjRMkONVNG-DNI9S-HoTsh" ,
    "https://drive.google.com/uc?export=view&id=1JJczVhdhDfRSw950nQhm80Rb8yNssiSE",
    "https://drive.google.com/uc?export=view&id=1SiCBMHEqXfzWCKJ3hhWgL8u1hx5OTdth" ,
    "https://drive.google.com/uc?export=view&id=1TALGU45xfLxh4Sd_zpONHYICL53ka3AW",
]
const Gallery = () => {
  const[data, setData]=useState({img: '',i:0})
  const viewImage=(img,i) =>{
    setData({img,i})
  }
  const imgAction =(action) => {
    let i=data.i;
    if(action ==='next.img'){
      setData({img:images[i+1],i:i+1});
    }
    if(action==='previous-img'){
      setData({img:images[i-1],i:i-1});
    }
    if(!action){
      setData({img:'',i:0});
    }
  }
  return (
    <>
    <br></br>
    <br />
    <h1 style={{color:'#d9d9a5',textAlign:'center'}}>Photo Gallery</h1>
    <br />
    <h3 style={{color:'#d9d9a5',textAlign:'center'}}> This photographic gallery contains certain moments which were captured during our visit to "WE FOR YOU" N.G.O located in Indore.</h3>
    <br />
     {data.img && 
      <div style={{
          width:'100%',
          height:'100%',
          background:'black',
          position:'fixed',
          display:'flex',
          justifyContent:'center',
          alignItems:'center',
          overflow:'hidden',
          padding:'10px',

      }}>
        <button onClick={() => imgAction()} style={{position:'absolute', top:'10px', right:'10px'}}>X</button>
        {/* <button onClick={() => imgAction('previous-img')}>Previous
        </button> */}
        <img src={data.img} alt='' style={{width:'auto', maxWidth:'95%',maxHeight:'100%'}} />
        {/* <button onClick={() => imgAction('next-img')}>Next
        </button> */}
        </div>
}
    <div style={{padding:"40px"}}>
    <ResponsiveMasonry columsCountBreakPoints ={{350: 1,550:2,400:3}} >
        <Masonry gutter="30px">
            {images.map((image,i) => (
                <img 
                    key={i}
                    src={image}
                    style={{width: "90%",height:"50%", display:"block",cursor:"pointer"}}
                    alt="" 
                    onClick={() => viewImage(image,i)}
                    />
                    
            ))}
        </Masonry>
    </ResponsiveMasonry>
    </div>
    </>
  )
}

export default Gallery