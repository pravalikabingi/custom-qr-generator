import { useContext, useEffect, useState } from "react";
import { ChromePicker } from "react-color";
import { InputContext } from "../App";

const InputColor = () => {
  const [color, setColor] = useState("#054080");
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  //context
  const {inputValue,setInputValue }=useContext(InputContext);

  useEffect(()=>{
    setInputValue({...inputValue, color:color})
  },[color])

  const handleChange = (color) => setColor(color.hex);

  const colorStyle = {
    fontWeight: "bold",
    fontSize: "1rem",
  };


  const colorDiv = {
    display: "flex",
    alignItem: "center",
    gap: "2px",
  };

  
  const colorDiv2 = {
    width: "30px",
    height: "30px",
    cursor: "pointer",
    border: "4px",
    background: color,
  };

  const colorDiv3={
    position:"absolute",
    marginTop:"3px"
  }

  return (
    <div>
      <label style={colorStyle}>Color</label>
      <div style={colorDiv}>
        <div
          onClick={() => setDisplayColorPicker(!displayColorPicker)}
          style={{ ...colorDiv2 }}
        ></div>
        <span>{color}</span>
      </div>
      {
      displayColorPicker && (
        <div style={colorDiv3}>
            <ChromePicker color={color} onChange={handleChange} />
        </div>
      )}
    </div>
  );
};
export default InputColor;
