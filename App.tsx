import React,{useContext} from 'react';
import './App.css';
import { Button } from './Components/Atoms/Button';
import { Label } from './Components/Atoms/Label';
import ContextListProduct, { ListProductContextProvider } from './Components/Context/ContextListProduct';
import { FormProduct } from './Components/Molecules/FormProduct';
import { ViewListProduct } from './Components/Molecules/ViewListProduct';
export const makeId = (
  length: number = 10,
  characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
): string => {
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

function App():JSX.Element {
  const {optionNew}=useContext(ContextListProduct)
  
  
  return (
    <div className="App h-screen w-full flex-col sm:grid-rows-3">
          <div className="App-header h-[10%] w-full"> 
            <div className='flex-row h-full justify-center items-center bg-[#F3EFE0]  w-full'>
                <Label className="h-[50%] justify-center font-bold items-center w-[100%] flex  text-2xl text-black">JUGUETERIA ASPERIA</Label> 
            </div>
          </div>
          {
          optionNew
          ?
          <div className='h-[90%] bg-[#F3EFE0] w-[full] flex justify-center items-center'>
            <ViewListProduct/>
          </div>
          :
          <div className='h-[90%] bg-[#F3EFE0] w-[full] flex flex-col justify-center items-center'>
            <FormProduct></FormProduct>
          </div>
          }
          
          
    
    </div>
  );
}

export default App;
