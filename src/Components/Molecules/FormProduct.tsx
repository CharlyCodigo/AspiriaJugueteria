
import React,{ChangeEvent, useContext, useState} from 'react';
import { makeId } from '../../App';
import { Button } from '../Atoms/Button';
import { Input } from '../Atoms/Input';
import { Label } from '../Atoms/Label';
import ContextListProduct, { ListProductInterface } from '../Context/ContextListProduct';
function FormProduct(){
    const {updateOption, setProduct, productForEdit,status, listProduct, updateProduct}=useContext(ContextListProduct)
    let formulary:ListProductInterface=
    {
        id:0,
        name:"",
        description:"",
        minYears:0,
        company:"",
        price:0,
    };
    if(status==="edit"){
        formulary={
            id:productForEdit.id,
            name:productForEdit.name,
            description:productForEdit.description,
            minYears:productForEdit.minYears,
            company:productForEdit.company,
            price:productForEdit.price,
        };

    }else{
        formulary={
        id:0,
        name:"",
        description:"",
        minYears:0,
        company:"",
        price:0,
    };
    }
    
    const getId=(value:number)=>{
        formulary.id=value;
        if(status==="edit"){
            alert("Recuerde que si esta editando no debe cambiar el id del producto que esta editando")
        }
        
    }
    const getName=(value:string)=>{
        formulary.name=value;
    }
    const getDescription=(value:string)=>{
        formulary.description=value;
    }
    const getMinYears=(value:number)=>{
        formulary.minYears=value;
    }
    const getCompany=(value:string)=>{
        formulary.company=value;
    }
    const getPrice=(value:number)=>{
        formulary.price=value;
    }
    const save=()=>{
        if((formulary.id!==0 && !isNaN(formulary.id)) && formulary.name!=="" && formulary.company!=="" && formulary.price!==0 && !isNaN(formulary.price) && formulary.price<=1000 && formulary.price>0 ){
            if(status==="new"){
                console.log("status")
                let exist=false;
                for (let index = 0; index < listProduct.length; index++) {
                    if(formulary.id===listProduct[index].id){
                        alert("El id del producto ya existe ingresa uno diferente")
                        exist=true
                    }else{
                        exist=false;
                    }
                    
                }
                if(exist===false){
                    setProduct(formulary)
                    updateOption(true)
                }       
            }
            if(status==="edit"){
                for (let index = 0; index < listProduct.length; index++) {
                    updateProduct(formulary)
                    updateOption(true)
                }
            }
        }else{
            (isNaN(formulary.id) || formulary.id===0) ? alert("Ingresa un Id valido para Continuar")
            :formulary.name===""? alert("Ingresa un nombre para Continuar")
            :formulary.company===""? alert("Ingresa el nombre de la compania para Continuar")
            :(isNaN(formulary.price) || formulary.price===0 || formulary.price>1000 || formulary.price<0)? alert("Ingresa un precio de producto valido para Continuar"):alert("Necesita llenar los campos vacios para continuar")
        }
        
      }
    console.log(formulary)

    return(
        <div className='h-[100%] w-[100%]'>
            <div className=' flex flex-col h-[10%] w-[100%] justify-center items-center'>
              <div className='grid-3-cols flex bg-[#497174] flex-row h-[100%] w-[80%] border-[2px] border-black border-solid '>
                <div className='w-[70%] h-[100%] '>
                  <Label className="h-[100%] font-bold ml-4 w-[100%] flex items-center text-2xl">Formulario de Producto</Label>
                </div>
                <div className='w-[15%] h-[100%] flex justify-center items-center flex-col'>
                  <Button 
                  onClick={save}
                  className="h-[50%] w-[50%] bg-sky-800">Save</Button>
                </div>
                <div className='w-[15%] h-[100%] flex justify-center items-center flex-col'>
                    <Button 
                    onClick={()=>{
                      updateOption(true)
                    }}
                    className="h-[50%] w-[50%] bg-sky-800">Cancel</Button>
                </div>
              </div>
            </div>     
            <div className='h-[80%] w-[100%] flex  flex-row justify-center'>
                <div className='h-[100%] grid-2-cols flex bg-[#D6E4E5] flex-col justify-center border-solid border-black border-[2px] w-[80%]'>
                    <div className='w-[100%] flex justify-center flex-row h-[10%]'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa el Id del producto</Label>
                        <Input 
                        type='number' 
                        className='h-[40%] w-[30%] border-[2px] border-black'
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getId(e.target.valueAsNumber)}
                        defaultValue={status==="edit"?productForEdit.id:undefined}
                        ></Input>
                    </div>
                    <div className='w-[100%] flex flex-row h-[10%] justify-center'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa el nombre del producto</Label>
                        <Input 
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getName(e.target.value)}
                        defaultValue={status==="edit"?productForEdit.name:undefined}
                        type='text' 
                        maxLength="50"
                        className='h-[40%] w-[30%] border-[2px] border-black'></Input>
                    </div>
                    <div className='w-[100%] flex flex-row h-[10%] justify-center'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa la descripcion del producto</Label>
                        <Input 
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getDescription(e.target.value)}
                        defaultValue={status==="edit"?productForEdit.description:undefined}
                        type='text'
                        maxLength="100" 
                        className='h-[40%] w-[30%] border-[2px] border-black'></Input>
                    </div>
                    <div className='w-[100%] flex flex-row h-[10%] justify-center'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa la edad minima del producto</Label>
                        <Input 
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getMinYears(e.target.valueAsNumber)}
                        defaultValue={status==="edit"?productForEdit.minYears:undefined}
                        type='number' 
                        min="0"
                        max="18"
                        className='h-[40%] w-[30%] border-[2px] border-black'></Input>
                    </div>
                    <div className='w-[100%] flex flex-row h-[10%] justify-center'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa el nombre de la compañia</Label>
                        <Input 
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getCompany(e.target.value)}
                        defaultValue={status==="edit"?productForEdit.company:undefined}
                        type='text' 
                        maxLength="50"
                        className='h-[40%] w-[30%] border-[2px] border-black'></Input>
                    </div>
                    <div className='w-[100%] flex flex-row h-[10%] justify-center'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa el precio del producto</Label>
                        <Input 
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getPrice(e.target.valueAsNumber)}
                        defaultValue={status==="edit"?productForEdit.price:undefined}
                        type='number' 
                        step={.01} 
                        min="1"
                        max="1000"
                        className='h-[40%] w-[30%] border-[2px] border-black'></Input>
                    </div> 
                </div>
            </div> 
        </div> 
    )
} export {FormProduct}