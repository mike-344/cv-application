import { useState } from "react";
import { Form } from "./Form";
import { Resume } from "./Resume";

function Content(){
    const [fieldValue, setFieldValue] = useState({
        name:"",
        email:"",
        phone:"",
        school:"",
        degree:"",
        schoolStartDate:"",
        schoolEndDate:"",
        company:"",
        position:"",
        jobStartDate:"",
        jobEndDate:"",

    })
    return (
        <>
        <Form />
        <Resume />
        </>
    )
 
}

export {Content}