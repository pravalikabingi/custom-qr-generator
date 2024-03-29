
import axios from 'axios';
import { createContext, useState } from 'react';
import QrCode from './component/QrCode';
import InputForm from './component/inputForm';


//create context

export const InputContext=createContext();

function App() {


  const [inputValue,setInputValue]=useState({
    url:'',
    color:''
  });

  const [response,setResponse]=useState('')
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)
   
 

  const config={
    headers: { Authorization:"Bearer 00f9ea00-c420-11ee-8f57-d181f4a9adb5 "}
  }

  const bodyParameters={
    "colorDark":inputValue.color,
    "qrCategory":"url",
    "text":inputValue.url
  }

  const getQrCode= async()=>{
    try{
      setLoading(true);
      const res=await axios.post('https://qrtiger.com/api/qr/static',bodyParameters,config);
      setResponse(res.data.url);
    }catch(err){
    setError(err);
  }finally{
    setLoading(false);
  }
};
  const value={
    inputValue,
    setInputValue,
    getQrCode,
    response,
    loading,
    error

  }


  const Styling={
    margin: '0 auto', 
    maxWidth: '4xl', 
    backgroundColor: 'white',
    borderRadius: '0.375rem', 
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    padding: '1rem',
    
    
  }


  
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen pt-36 px2">
      <div className="container" style={Styling}>
        <div className="md:grid md:grid-cols-3">
          <InputContext.Provider value={value}>
          
        <InputForm/>
        <QrCode />
        </InputContext.Provider>
          
          
          

        </div>

      </div>
      
    </div>
  );
}

export default App;
