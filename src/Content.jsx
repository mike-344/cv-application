import { useState } from "react";
import { Form } from "./Form";
import { Resume } from "./Resume";

function Content(){
    const [fieldValue, setFieldValue] = useState("")
    return (
        <>
        <Form />
        <Resume />
        </>
    )
 
}

export {Content}