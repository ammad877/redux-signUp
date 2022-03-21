import React from "react";

const InputCom = ({type,value,onChg}) => {
    return <input type={type} value={value} onChange= {(e) => onChg(e.target.value)}/>
}

export default InputCom;