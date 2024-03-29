import { useContext } from "react"
import { InputContext } from "../App"


const InputField=()=>{

    const {inputValue,setInputValue }=useContext(InputContext);
    
    const handleOnchange=(e)=>{
        setInputValue({...inputValue,url:e.target.value})
    }


    const labelStyling={
        fontWeight: 'bold',
        fontSize: '1rem' 
    }
    const inputStyling={
        width: "100%",
        border: "2px solid",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        paddingLeft: "3rem",
        paddingRight: "3rem",
        color: "#718096",
        borderRadius: "0.5rem",
    }
    return(
        <div style={labelStyling}>
            <label>User Input</label>
            <input type="text" 
            placeholder="enter text here...." 
            style={inputStyling}
            value={inputValue.url}
            onChange={handleOnchange}
            />
        </div>
    )
}
export default InputField