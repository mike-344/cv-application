import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Resume } from "./Resume";



function App() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    degree: "",
    schoolStartDate: "",
    schoolEndDate: "",
    company: "",
    title: "",
    jobStartDate: "",
    jobEndDate: "",
    responsibilities: "",
})
  return (
    <>
     <Form value = {value}/>
     <Resume />
     
    </>
  );
}



export default App;
