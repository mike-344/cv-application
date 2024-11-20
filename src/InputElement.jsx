function InputElement({labelFor, labelText, inputType = "text", name, value}) {
    const features = {
        display: "block"
    }
    return (
      <>
        <label htmlFor={labelFor}>{labelText}</label>
        <input type={inputType} id={labelFor} style={features} name={name} value={value}/>
      </>
    );
  }

  export {InputElement} 