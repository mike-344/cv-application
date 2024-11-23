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
    schoolStartDate: "2024-11-20",
    schoolEndDate: "2024-11-20",
    company: "Your Company",
    title: "Your Title",
    jobStartDate: "2024-11-20",
    jobEndDate: "2024-11-20",
    responsibilities: "-You can list your\n-Responsibilities here",
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
