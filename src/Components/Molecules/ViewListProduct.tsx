import React, { useContext } from 'react';
import { Button } from '../Atoms/Button';
import { Label } from '../Atoms/Label';
import ContextListProduct, { ListProductInterface } from '../Context/ContextListProduct';
import { Product } from './Product';

function ViewListProduct():JSX.Element{
    const {updateOption, listProduct} = useContext(ContextListProduct)
    let result;
    return(
        <div className='grid-2-cols  h-[80%] w-[80%]'>
            <div className='grid-4-cols flex flex-row h-[10%] w-[100%]'>
                <div className='h-[100%] w-[55%]  border-[1px] border-black border-solid '>
                    <Label className="sm:text-2xl">Lista de Juguetes</Label>
                </div>
                <div className='h-[100%] w-[15%] flex justify-center items-center flex-col border-[1px] border-black border-solid '>
                    <Button 
                        onClick={()=>{
                            updateOption(false);
                        }} 
                        className=" h-[50%] w-[50%] bg-sky-800">New</Button>
                </div>
                <div className='h-[100%] w-[15%] flex justify-center items-center flex-col border-[1px] border-black border-solid'>
                    <Button className=" h-[50%] w-[50%] bg-sky-800">Edit</Button>
                </div>
                <div className='h-[100%] w-[15%] flex justify-center items-center flex-col border-[1px] border-black border-solid'>
                    <Button 
                    onClick={()=>{
                        result = window.prompt("ingresa la id");
                    }}
                    className=" h-[50%] w-[50%] bg-sky-800">Delete</Button>
                    
                </div>
            </div>
            <div className='w-[100%] h-[90%]'>
                <div className='grid-6-cols flex flex-row h-[10%] w-[100%]'>
                    <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>ID</Label>
                    </div>
                    <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>NOMBRE</Label>
                    </div>
                    <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>DESCRIPCION</Label>
                    </div>
                    <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>EDAD MINIMA</Label>
                    </div>
                    <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>COMPAÑIA</Label>
                    </div>
                    <div className='w-1/6 h-[100%] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>PRECIO</Label>
                    </div>
                </div>
                <ul className='w-[100%] h-[10%]'>
                    {
                        listProduct.map((product:ListProductInterface)=>(
                            <li key={product.id} className='w-[100%] h-[100%]'>
                                <Product product={product}/>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        </div>
    )

} export{ViewListProduct}