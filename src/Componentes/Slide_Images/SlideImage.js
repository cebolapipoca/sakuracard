import React from "react";
import "./SlideImageStyle.css"

import Slide_1 from '../../imagens/slides/slide_1.png';

function Slide_Image()
{
    return (
        <div className="SlideImageConteiner">
            <img src={Slide_1}></img>
        </div>
    )
}

export default Slide_Image;