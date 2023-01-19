import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useContext, ChangeEvent, useState } from 'react';
import { Button } from '../Atoms/Button';
import { Input } from '../Atoms/Input';
import { Label } from '../Atoms/Label';
import ContextListProduct, { ListProductInterface } from '../Context/ContextListProduct';
import { Product } from './Product';

function ViewListProduct():JSX.Element{
    const {updateOption, listProduct, deleteProduct, setProductForEditContext, updateStatus} = useContext(ContextListProduct)
    const [idDelete, setIdDelete]=useState(0)
    const [idEdit, setIdEdit]=useState(0)
    
    const newProduct=()=>{
        updateOption(false);
        updateStatus("new")
    }
    const getValueId=(value:number)=>{
        setIdDelete(value)
    }
    const getValueIdEdit=(value:number)=>{
        setIdEdit(value)
    }
    const delProduct=()=>{
        deleteProduct(idDelete)
    }
    const editProduct=()=>{
        let exist=false;
        for (let index = 0; index < listProduct.length; index++) {
            if(listProduct[index].id===idEdit){
                exist=true
            }
        }
        if(exist){
            setProductForEditContext(idEdit)
            updateOption(false);
            updateStatus("edit")
        }
        else{
            alert("ingresa un id valido")
        }
    }
    return(
        <div className='grid-2-cols  h-[80%] w-[80%] bg-[#EFF5F5]'>
            <div className='grid-4-cols flex flex-row h-[10%] w-[100%]'>
                <div className='h-[100%] w-1/2 font-bold  border-[1px] flex items-center felx flex-row  border-black bg-[#497174] border-solid '>
                    <Label className="sm:text-2xl ml-4">Lista de Juguetes</Label>
                </div>
                <div className='h-[100%] w-1/6 flex justify-center bg-[#497174] items-center flex-col border-[1px] border-black border-solid '>
                    <Button 
                    onClick={newProduct} 
                    className=" h-[50%] w-[50%] bg-sky-800">New</Button>
                </div>
                <div className='h-[100%] w-1/6 flex justify-center items-center bg-[#497174] flex-col border-[1px] border-black border-solid'>
                    <Button 
                    onClick={editProduct}
                    className=" h-[50%] w-[50%] bg-sky-800">Edit</Button>
                    <Input 
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>getValueIdEdit(e.target.valueAsNumber)}
                    type="number" 
                    className="h-[40%] w-[50%] border-black border-[1px] mt-[2px]"></Input>
                </div>
                <div className='h-[100%] w-1/6 flex justify-center bg-[#497174] items-center flex-col border-[1px] border-black border-solid'>
                    <Button 
                    onClick={delProduct}
                    className=" h-[50%] w-[50%] bg-sky-800">Delete</Button>
                    <Input 
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>getValueId(e.target.valueAsNumber)}
                    type="number" 
                    className="h-[40%] w-[50%] border-black border-[1px] mt-[2px]"></Input>
                    
                </div>
            </div>
            <div className='w-[100%] h-[90%]'>
                <div className='grid-6-cols flex flex-row h-[10%] w-[100%]'>
                    <div className='w-1/6 font-bold h-[100%] bg-[#D6E4E5] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>ID</Label>
                    </div>
                    <div className='w-1/6 h-[100%] font-bold bg-[#D6E4E5] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>NOMBRE</Label>
                    </div>
                    <div className='w-1/6 h-[100%] font-bold bg-[#D6E4E5] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>DESCRIPCION</Label>
                    </div>
                    <div className='w-1/6 h-[100%] font-bold bg-[#D6E4E5] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>EDAD MINIMA</Label>
                    </div>
                    <div className='w-1/6 h-[100%] font-bold bg-[#D6E4E5] flex justify-center items-center border-[1px] border-black borde-solid'>
                        <Label>COMPAÑIA</Label>
                    </div>
                    <div className='w-1/6 h-[100%] font-bold bg-[#D6E4E5] flex justify-center items-center border-[1px] border-black borde-solid'>
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