function InputElement({labelFor, labelText, inputType = "text"}) {
    const features = {
        display: "block"
    }
    return (
      <>
        <label htmlFor={labelFor}>{labelText}</label>
        <input type={inputType} id={labelFor} style={features}/>
      </>
    );
  }

  export {InputElement} 