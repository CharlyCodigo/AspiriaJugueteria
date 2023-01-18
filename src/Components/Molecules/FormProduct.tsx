import { findSourceMap } from 'module';
import React,{ChangeEvent, useContext} from 'react';
import { Button } from '../Atoms/Button';
import { Input } from '../Atoms/Input';
import { Label } from '../Atoms/Label';
import ContextListProduct, { ListProductInterface } from '../Context/ContextListProduct';
function FormProduct(){
    const {updateOption, setProduct}=useContext(ContextListProduct)
    const form:ListProductInterface={
        id:0,
        name:"",
        description:"",
        minYears:0,
        company:"",
        price:0,
    };
    const getId=(value:number)=>{
        form.id=value;
    }
    const getName=(value:string)=>{
        form.name=value;
    }
    const getDescription=(value:string)=>{
        form.description=value;
    }
    const getMinYears=(value:number)=>{
        form.minYears=value;
    }
    const getCompany=(value:string)=>{
        form.company=value;
    }
    const getPrice=(value:number)=>{
        form.price=value;
    }
    const save=()=>{
        if((form.id!==0 && !isNaN(form.id)) && form.name!=="" && form.company!=="" && form.price!==0 && !isNaN(form.price) && form.price<=1000 && form.price>0 ){
            setProduct(form)
            updateOption(true)
        }else{
            (isNaN(form.id) || form.id===0) ? alert("Ingresa un Id valido para Continuar")
            :form.name===""? alert("Ingresa un nombre para Continuar")
            :form.company===""? alert("Ingresa el nombre de la compania para Continuar")
            :(isNaN(form.price) || form.price===0 || form.price>1000 || form.price<0)? alert("Ingresa un precio de producto valido para Continuar"):alert("Necesita llenar los campos vacios para continuar")
        }
        
      }
    console.log(form)

    return(
        <div className='h-[100%] w-[100%]'>
            <div className=' flex flex-col h-[10%] w-[100%] justify-center items-center'>
              <div className='grid-3-cols flex flex-row h-[100%] w-[80%] border-[2px] border-black border-solid '>
                <div className='w-[70%] h-[100%] '>
                  <Label className="h-[100%] font-bold w-[100%] flex items-center text-2xl">Formulario de Producto</Label>
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
                <div className='h-[100%] grid-2-cols flex flex-col justify-center border-solid border-black border-[2px] w-[80%]'>
                    <div className='w-[100%] flex justify-center flex-row h-[10%]'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa el Id del producto</Label>
                        <Input 
                        type='number' 
                        className='h-[40%] w-[30%] border-[2px] border-black'
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getId(e.target.valueAsNumber)}
                        ></Input>
                    </div>
                    <div className='w-[100%] flex flex-row h-[10%] justify-center'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa el nombre del producto</Label>
                        <Input 
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getName(e.target.value)}
                        type='text' 
                        maxLength="50"
                        className='h-[40%] w-[30%] border-[2px] border-black'></Input>
                    </div>
                    <div className='w-[100%] flex flex-row h-[10%] justify-center'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa la descripcion del producto</Label>
                        <Input 
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getDescription(e.target.value)}
                        type='text'
                        maxLength="100" 
                        className='h-[40%] w-[30%] border-[2px] border-black'></Input>
                    </div>
                    <div className='w-[100%] flex flex-row h-[10%] justify-center'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa la edad minima del producto</Label>
                        <Input 
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getMinYears(e.target.valueAsNumber)}
                        type='number' 
                        min="0"
                        max="18"
                        className='h-[40%] w-[30%] border-[2px] border-black'></Input>
                    </div>
                    <div className='w-[100%] flex flex-row h-[10%] justify-center'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa el nombre de la compañia</Label>
                        <Input 
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getCompany(e.target.value)}
                        type='text' 
                        maxLength="50"
                        className='h-[40%] w-[30%] border-[2px] border-black'></Input>
                    </div>
                    <div className='w-[100%] flex flex-row h-[10%] justify-center'>
                        <Label className='h-[100%] w-[30%] font-bold text-xl'>Ingresa el precio del producto</Label>
                        <Input 
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>getPrice(e.target.valueAsNumber)}
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