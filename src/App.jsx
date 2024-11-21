import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";



function App() {
  const [inputValue, setInputValue] = useState("")
  return (
    <>
     <Form inputValue/>
     <Resume />
     
    </>
  );
}



export default App;
