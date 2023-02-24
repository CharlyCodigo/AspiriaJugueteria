import React, { createContext, useState, ReactNode } from 'react';
export interface ListProductInterface{
    id:number;
    name:string;
    description?:string;
    minYears?:number;
    company:string;
    price:number;
  }
const ContextListProduct = createContext<{ 
    updateStatus: (value:string) => void; 
    status:string;
    productForEdit:ListProductInterface;
    setProductForEditContext:(id:number)=>void;
    setProduct:(prduct:ListProductInterface)=>void;
    updateProduct:(prduct:ListProductInterface)=>void;
    deleteProduct:(id:number)=>void;    
    updateOption: (value:boolean) => void; 
    optionNew:boolean;
    listProduct:ListProductInterface[];
}>({
    updateStatus: (value:string) => {},
    status:"new",
    productForEdit:{
      id:1234,
      name:"caballito",
      description:"Pieza de madera caballito",
      minYears:10,
      company:"TOYSTORE",
      price:234,
    },
    setProductForEditContext:(id:number)=>{},
    setProduct:(product:ListProductInterface)=>{},
    updateProduct:(prduct:ListProductInterface)=>{},
    deleteProduct:(id:number)=>{},
    updateOption:(value)=>{},
    optionNew:true,
    listProduct:[],
});
interface Props {
  children: ReactNode;
}

function ListProductContextProvider({ children }: Props) {
const [optionNew,setOptionNew]=useState(true)
const [status, setStatus]=useState("new")
const [productForEdit, setProductForEdit]=useState<ListProductInterface>({
  id:0,
  name:"",
  description:"",
  minYears:0,
  company:"",
  price:0,
},)
const [listProduct,setListProduct]=useState<ListProductInterface[]>([
    
])
  const updateOption=(value:boolean)=> {
    setOptionNew(value)
  }
  const setProduct=(product:ListProductInterface)=>{
    listProduct.push(product)
  }
  const deleteProduct=(id:number)=>{
    const newListProduct = listProduct.filter((product, index) => product.id !== id);
    setListProduct(newListProduct);
  }
  const setProductForEditContext=(value:number)=>{
    for (let index = 0; index < listProduct.length; index++) {
      if(listProduct[index].id===value){
        setProductForEdit(listProduct[index])
      }
      
    }
    console.log(productForEdit)
  }
  const updateStatus=(value:string)=>{
    setStatus(value)
  }
  const updateProduct=(product:ListProductInterface)=>{
    const newListProduct = [...listProduct];
    for (let index = 0; index < listProduct.length; index++) {
      if(listProduct[index].id===product.id){
          newListProduct[index].id=product.id;
          newListProduct[index].name=product.name;
          newListProduct[index].description=product.description
          newListProduct[index].minYears=product.minYears
          newListProduct[index].company=product.company
          newListProduct[index].price=product.price

      }
      
    }
    setListProduct(newListProduct);
  }
  const value = {
    updateStatus,
    status,
    productForEdit,
    setProductForEditContext,
    updateOption,
    deleteProduct,
    optionNew,
    listProduct,
    setProduct,
    updateProduct,
  };
  return <ContextListProduct.Provider value={value}>{children}</ContextListProduct.Provider>;
}
export { ListProductContextProvider };
export default ContextListProduct;
