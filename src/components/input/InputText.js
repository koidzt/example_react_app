import React from 'react';
import '../../App.css';

function InputText(props) {
  const { value, onChangeInput, name, placeholder } = props;

  const getClassCSS = () => {
    let cssClass = 'Input InputElement';
    if (props.error && props.error.isTouched) {
      cssClass += ' Invalid';
    }

    return cssClass;
  };
  return (
    <div>
      <input value={value} onChange={onChangeInput} className={getClassCSS()} name={name} placeholder={placeholder} />
      <p className="ErrorMessage">{props.error.message}</p>
    </div>
  );
}

export default InputText;
