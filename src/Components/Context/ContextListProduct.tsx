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
    setProduct:(prduct:ListProductInterface)=>void;
    updateOption: (value:boolean) => void; 
    optionNew:boolean;
    listProduct:ListProductInterface[];
}>({
    setProduct:(product:ListProductInterface)=>{},
    updateOption:(value)=>{},
    optionNew:true,
    listProduct:[],
});
interface Props {
  children: ReactNode;
}

function ListProductContextProvider({ children }: Props) {
const [optionNew,setOptionNew]=useState(true)
const [listProduct,setListProduct]=useState<ListProductInterface[]>([
    {
          id:1234,
          name:"caballito",
          description:"Pieza de madera caballito",
          minYears:10,
          company:"TOYSTORE",
          price:234,
        },
        {
          id:134,
          name:"celular",
          description:"Pieza de plastico celular",
          minYears:10,
          company:"Toystory",
          price:2304,
        },
])
  function updateOption(value:boolean) {
    setOptionNew(value)
  }
  function setProduct(product:ListProductInterface){
    listProduct.push(product)
  }
  const value = {
    updateOption,
    optionNew,
    listProduct,
    setProduct,
  };
  return <ContextListProduct.Provider value={value}>{children}</ContextListProduct.Provider>;
}
export { ListProductContextProvider };
export default ContextListProduct;
