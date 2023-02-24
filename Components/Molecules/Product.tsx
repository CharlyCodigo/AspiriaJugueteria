import React from 'react'
import { Label } from '../Atoms/Label'
import { ListProductInterface } from '../Context/ContextListProduct'
interface ProductProps{
    product:ListProductInterface
} 
function Product({product}:ProductProps){
    return(
        <div className='grid-6-cols flex flex-row h-[100%] w-[100%]'>
            <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                <Label>{product.id}</Label>
            </div>
            <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                <Label>{product.name}</Label>
            </div>
            <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                {
                    product.description!=null?<Label>{product.description}</Label>:<></>
                }
            </div>
            <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                {
                    product.minYears!=null?<Label>{product.minYears}</Label>:<></>
                }
            </div>
            <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                <Label>{product.company}</Label>
            </div>
            <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                <Label>{product.price}</Label>
            </div>
        </div>
    )
 }export {Product}