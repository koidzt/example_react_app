import React, { useState } from 'react';
import InputText from '../../components/input/InputText';

const initFormData = {
  name: {
    value: '',
    validator: {
      minLength: 3,
      maxLength: 6,
      required: true,
    },
    error: { status: true, message: '', isTouched: false },
  },
  phonenumber: {
    value: '',
    validator: {
      minLength: 10,
      maxLength: 10,
    },
    error: { status: true, message: '', isTouched: false },
  },
  email: {
    value: '',
    validator: {
      required: true,
    },
    error: { status: true, message: '', isTouched: false },
  },
  password: {
    value: '',
    validator: {
      minLength: 6,
      maxLength: 24,
      required: true,
    },
    error: { status: true, message: '', isTouched: false },
  },
};

function RegisterForm() {
  const [formData, setFormData] = useState(initFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  const { name, phonenumber, email, password } = formData;

  const checkValue = (value, rules) => {
    let isValid = true;
    let trimmerValue = value.trim();
    let message = '';

    if (rules.required && trimmerValue.length === 0) {
      isValid = false;
      message = 'กรุณากรอกช่องนี้';
    }

    if (rules.maxLength && trimmerValue.length > rules.maxLength) {
      isValid = false;
      message = `ความยาวต้องไม่เกิน ${rules.maxLength} ตัว`;
    }

    if (rules.minLength && trimmerValue.length < rules.minLength) {
      isValid = false;
      message = `ความยาวอย่างน้อย ${rules.minLength} ตัว`;
    }

    return { isValid, message };
  };

  const onChangeInput = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const formUpdate = { ...formData };
    formUpdate[fieldName].value = fieldValue;
    formUpdate[fieldName].error.isTouched = true;

    let { isValid, message } = checkValue(e.target.value, formUpdate[fieldName].validator);

    formUpdate[fieldName].error.status = !isValid;
    formUpdate[fieldName].error.message = message;

    let newIsFormValid = true;
    for (let key in formUpdate) {
      if (formUpdate[key].validator.required) {
        newIsFormValid = !formUpdate[key].error.status && newIsFormValid;
      }
    }

    setFormData(formUpdate);
    setIsFormValid(newIsFormValid);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, phonenumber, email, password } = formData;
    const result = {
      name: name.value,
      email: email.value,
      password: password.value,
      phonenumber: phonenumber.value,
    };
    console.log(result);
  };

  console.log(formData);

  return (
    <div className="RegisterForm">
      <form onSubmit={onSubmit}>
        <InputText onChangeInput={onChangeInput} value={name.value} name="name" placeholder="ชื่อ" error={name.error} />
        <InputText
          onChangeInput={onChangeInput}
          value={phonenumber.value}
          name="phonenumber"
          placeholder="เบอร์โทรศัพท์"
          error={phonenumber.error}
        />
        <InputText
          onChangeInput={onChangeInput}
          value={email.value}
          name="email"
          placeholder="อีเมล"
          error={email.error}
        />
        <InputText
          onChangeInput={onChangeInput}
          value={password.value}
          name="password"
          placeholder="รหัสผ่าน"
          error={password.error}
          type="password"
        />
        <button disabled={!isFormValid} htmlFor="submit" className="Button">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
