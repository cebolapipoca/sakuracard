import react from "react";
import './InputSakura.css'

function InputSakura(props)
{

    if(props.doubled)
    {
        return(
            <div className="doubled_input">
                <div className="Input_Label" style={{width: props.width}}>
                    <label>{props.label}</label>
                    <input className="Input_Sakura"/>
                </div>

                <div className="Input_Label" style={{width: props.width2}}>
                    <label>{props.label2}</label> 
                    <input className="Input_Sakura"/>
                </div>
            </div>
        )
    }
    else {
        if(props.select == true)
        {
            return (
                <div className="Input_Label" style={{width: props.width}}>
                    <label>{props.label}</label>
                    <select className="Input_Sakura">
                        {props.options.map((option)=>(
                            <option value={option.value}>{option.text}</option>
                        ))}
                    </select>
            </div>
            )
        }
        else {
        return(
            <div className="Input_Label" style={{width: props.width}}>
                <label>{props.label}</label>
                <input className="Input_Sakura" />
            </div>
        )
    }
    }

    
}

export default InputSakura