import React, { useState, useEffect } from "react";
import "./SlideImageStyle.css"
import Arrow from '../../imagens/icons/arrow_left_minimalist.svg'

import Slide_1 from '../../imagens/slides/slide_1.png';


function Slide_Image(props)
{

  const [slideAtual, setSlideAtual] = useState(1)
  
  useEffect(()=>{
        const ClassImage = Array.from(document.getElementsByClassName('slideImagetrue'))

        ClassImage.forEach(Imagem => {
        let proximoSlide = ((slideAtual - 1) * 100) + '%'
        
        Imagem.style.right = proximoSlide
        
     });
  },[slideAtual])


  function MudarSlideSeta(arrow)
  {
  
      const RadiosList = Array.from(document.getElementsByClassName('slideRadio'))
      let LastNumber = RadiosList.length
      console.log(LastNumber)
      
      if(arrow == 'right')
      {
        if(slideAtual == LastNumber)
        {
            setSlideAtual(1)
        }
        else 
        {
            setSlideAtual(slideAtual + 1)
        }
  
      }else{
        if(slideAtual == 1)
        {
            setSlideAtual(LastNumber)
        }
        else {
            setSlideAtual(slideAtual - 1)
        }
      }
  }

    function MudarSlide()
    {
        const RadiosList = Array.from(document.getElementsByClassName('slideRadio'))
    
        RadiosList.forEach(Radio => {
            if(Radio.checked)
            {
                let slide = parseInt(Radio.attributes[1].value)
                setSlideAtual(slide)
            }
        });

        
    }

    return (
        <div className="SlideImageConteiner">
            <div className="slideArrows">
                <img src={Arrow} className="slideArrow" onClick={()=>{MudarSlideSeta('left')}} id="slideArrowLeft"/>
                <img src={Arrow} className="slideArrow" onClick={()=>{MudarSlideSeta('right')}} id="slideArrowRight"/>
            </div>

            <div className="slideIndicators">

                <input type="radio" className="slideRadio" slidenumber={1} onChange={()=>{MudarSlide()}} name="slideImageRadio" id="slideImageRadio1" defaultChecked></input>
                <input type="radio" className="slideRadio" slidenumber={2} onChange={()=>{MudarSlide()}} name="slideImageRadio"id="slideImageRadio2"></input>
                <input type="radio" className="slideRadio" slidenumber={3} onChange={()=>{MudarSlide()}} name="slideImageRadio" id="slideImageRadio3"></input>

                <label htmlFor="slideImageRadio1" ></label>
                <label htmlFor="slideImageRadio2" ></label>
                <label htmlFor="slideImageRadio3" ></label>
            </div>

            <div className="slideImages">
                <img id="slideImage1" className="slideImagetrue" src={"https://copag.com.br/uploads/tinymce/Produto%2000.png"}></img>
                <img id="slideImage2" className="slideImagetrue" src={"https://m.media-amazon.com/images/I/81M2GcPdrcL._AC_UF894,1000_QL80_.jpg"}></img>
                <img id="slideImage3" className="slideImagetrue" src={"https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/pokemon-scarlet-and-violet-cover-art.jpg"}></img>
            </div>
        </div>
    )
}

//<img id="slideImage1" src={"https://m.media-amazon.com/images/I/81M2GcPdrcL._AC_UF894,1000_QL80_.jpg"}></img>
// <img id="slideImage3" src={"https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/pokemon-scarlet-and-violet-cover-art.jpg"}></img>

export default Slide_Image;