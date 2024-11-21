import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";



function App() {
  const [value, setValue] = useState({
    name: "Your Name",
    email: "your.email@email.com",
    phone: "(555) 555-5555",
    school: "Your University",
    degree: "BA Economics",
    schoolStartDate: "9999-99-99",
    schoolEndDate: "9999-99-99",
    company: "Your Company",
    title: "Your Title",
    jobStartDate: "9999-99-99",
    jobEndDate: "9999-99-99",
    responsibilities: "Responsibility 1",
})
const handleChange = (e, prop) => setValue({...value, [prop]:e.target.value})
  return (
    <>
     <Form value = {value} handleChange={handleChange}/>
     <Resume value = {value}/>
     
    </>
  );
}



export default App;
