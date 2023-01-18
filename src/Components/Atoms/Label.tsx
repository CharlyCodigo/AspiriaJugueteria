import React from "react";
interface LabelProps{
    children:string|number,
    [key: string]: any,
}
 function Label({children, ...attrs}:LabelProps){
    return(
        <label {...attrs}>{children}</label>
    )

 }export {Label}