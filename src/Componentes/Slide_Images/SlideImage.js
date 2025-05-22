import React, { useState, useEffect } from "react";
import "./SlideImageStyle.css"
import Arrow from '../../imagens/icons/arrow_left_minimalist.svg'

import Slide_1 from '../../imagens/slides/slide_1.png';


function Slide_Image(props)
{

  const [slideAtual, setSlideAtual] = useState(1)
  console.log(slideAtual)
  
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
                let slide = parseInt(Radio.attributes[1].value) + 1
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

                {
                    props.slideList.map((slide, i)=>(
                        <input type="radio" className="slideRadio" slidenumber={i} onChange={()=>{MudarSlide()}} name="slideImageRadio" id={"slideImageRadio" + i}></input>
                    ))
                }

                {
                    props.slideList.map((slide, i)=>(
                        <label htmlFor={"slideImageRadio" + i}></label>
                    ))
                }

                
            </div>

            <div className="slideImages">
                {
                    props.slideList.map((slide)=>(
                        <img className="slideImagetrue" src={slide.image}></img>
                    ))
                }
            </div>
        </div>
    )
}

//<img id="slideImage1" src={"https://m.media-amazon.com/images/I/81M2GcPdrcL._AC_UF894,1000_QL80_.jpg"}></img>
// <img id="slideImage3" src={"https://static1.dualshockersimages.com/wordpress/wp-content/uploads/2022/12/pokemon-scarlet-and-violet-cover-art.jpg"}></img>

export default Slide_Image;