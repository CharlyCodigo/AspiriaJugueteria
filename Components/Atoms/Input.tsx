import React from "react";
type Type = 'number' | 'text';
interface InputProps{
    type:Type;
    [key: string]: any;
}
function Input({type, ...attrs}:InputProps){
    return(
        <input {...attrs} type={type}></input>
    ) 
} export {Input}