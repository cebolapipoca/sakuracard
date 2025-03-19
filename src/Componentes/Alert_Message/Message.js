import React, { useState } from 'react'
import './Message.css'


export function AbrirMessageBox(message)
{
  const messagebox = document.getElementById('message_box')
  const messageboxtext = document.getElementById('messagebox_text')
  messageboxtext.textContent = message
  messagebox.style.display = 'flex'
  
}

export default function Message() {

  const [reset, UseReset] = useState(false)

  function ReduzirOpacidade()
  {
     const messagebox = document.getElementById('message_box')

     setTimeout(()=>{
        messagebox.style.opacity = '0%'

        setTimeout(()=>{

          messagebox.style.display = 'none'
           messagebox.style.opacity = '100%'
           UseReset(true)
           UseReset(false)
           UseReset(true)
        }, 1000)
     }, 5000)
  }

    if(reset)
    {
      ReduzirOpacidade()
    }

  return (
    <div className='message_box' onLoad={ReduzirOpacidade} id='message_box'>
      <img src='https://e7.pngegg.com/pngimages/49/443/png-clipart-x-mark-x-button-wrong-close-button-icon-thumbnail.png'/>
      <h1 id='messagebox_text'></h1>
    </div>

    
  )
}
