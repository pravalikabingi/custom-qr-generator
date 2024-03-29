import { useContext } from "react"
import InputColor from "./inputColor"
import InputField from "./inputField"
import { InputContext } from "../App"


const InputForm=()=>{
  const {getQrCode}=useContext(InputContext)
   const handleSubmit=()=>getQrCode();



    const divStyling={
        gridColumn: '1/span 2',
        padding: '1.5rem', 
        display: 'grid',
        gap: '1rem',
    }
    const buttonStyles = {
        
        backgroundColor: '#4299e1', 
        maxWidth: '50rem', 
        marginLeft: 'auto', 
        paddingLeft: '1rem', 
        paddingRight: '1rem', 
        paddingTop: '0.5rem', 
        paddingBottom: '0.5rem', 
        color: '#ffffff', 
        borderRadius: '0.2rem', 
        marginTop: '1rem', 
        hoverBackgroundColor: '#3182ce', 
        disabledBackgroundColor: '#a0aec0',
        cursor: 'pointer', 
        pointerEvents: 'auto',
      };

    //   const disabledStyles = {
    //     backgroundColor:' buttonStyles.disabledBackgroundColor',
    //     cursor: 'not-allowed',
    //     pointerEvents: 'none',
    //   };
    return(
        <div style={divStyling}>
            <InputField/>
            <InputColor/>
            <button   onClick={handleSubmit} style={buttonStyles}>Generate QrCode</button>

        </div>
    )
}
export default InputForm