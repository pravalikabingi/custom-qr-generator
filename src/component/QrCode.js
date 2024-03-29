import { useContext } from "react";
import { InputContext } from "../App";

import {saveAs} from 'file-saver'


const QrCode=()=>{


    const {response, loading, error}=useContext(InputContext);
    // console.log(response);


    const downloadImg = () => {
        console.log('Downloading image:', response);
        saveAs(response, 'qrCode.png');
    }
    

    if(loading){
        return(
            
            <div style={{animation: 'pulse 2s infinite',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center', padding: '0 10px',gap: '3'}}>
                <div style={{height:"32px",width: '100%',backgroundColor: '#d3d3d3'}}></div>
                <div style={{height: '8px',width: '100%',backgroundColor: '#d3d3d3'}}></div>

            </div>
        )
    }

    if(error){
        return <div style={{ color: '#718096',  display: 'flex', alignItems: 'center'}}>Sorry, Something went wrong 😥</div>
    }

    const containerStyles={
        backgroundColor: '#f7fafc', 
        borderRadius: '0 0.375rem 0.375rem 0', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        justifyContent: 'center', 
        paddingY: '1rem', 
        
    }
    const buttonStyles = {
        backgroundColor: '#4299e1', 
        color: '#ffffff', 
        marginTop: '0.5rem',
        paddingLeft: '1rem', 
        paddingRight: '1rem', 
        paddingTop: '0.25rem', 
        paddingBottom: '0.25rem', 
        width: '100%', 
      };

    return(
        <div style={containerStyles}>
            {response ?(
                <div>
                <img src={response} alt="qr code" className="w-48"/>
                <button onClick={downloadImg} style={buttonStyles}>Download</button>
                
            </div>
            ):(
               <div className="text-gray-500">Your Qr Code is showing here...</div> 
            )}
            
           
        </div>
    )
}
export default QrCode


