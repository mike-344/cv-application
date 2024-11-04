import './FormInput.css'
function FormInput({labelText, inputId, inputType = "text"}){

    return (
        <div>
        <label htmlFor={inputId}>{labelText} </label>
        <input type={inputType} id={inputId}/>
        </div>
    )
}

export default FormInput