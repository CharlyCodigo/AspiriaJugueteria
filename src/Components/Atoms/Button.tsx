import React from "react";
interface ButtonProps{
    children:string, 
    [key: string]: any,
}
function Button({children,...attrs}:ButtonProps){
    return(
        <button {...attrs}>{children}</button>
 
    )
} export {Button}