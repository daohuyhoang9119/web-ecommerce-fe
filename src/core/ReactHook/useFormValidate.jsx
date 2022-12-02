import { useState, useEffect } from "react";
const patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i;
const patternPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
const patternName = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i;
const patternFbUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const patternWebUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
const patternPassWord = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/;

export default function useFormValidate(initialValue, validate) {
  let { option } = validate;
  if (!option) option = {};
  let value = initialValue;
  if (option.localStorage) {
    value =
      JSON.parse(localStorage.getItem(option.localStorage)) || initialValue;
  }

  const [form, setForm] = useState(value);
  const [error, setError] = useState();

  const inputChange = (e) => {
    e.preventDefault();
    let key = e.target.name;
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    setForm({
      ...form,
      [key]: value,
    });
  };
  useEffect(() => {
    if (option.localStorage) {
      localStorage.setItem(option.localStorage, JSON.stringify(form));
    }
    return () => {
      localStorage.removeItem(option.localStorage);
    };
  }, [form]);
  const onSubmit = (option = { exclude: {} }) => {
    let { exclude } = option;
    if (typeof exclude === "undefined") exclude = {};
    const { rule, message } = validate;
    const err = {};

    for (let i in rule) {
      let r = rule[i];
      if (i in exclude) continue;
      if (r.required) {
        if (!form[i] || /^\s+$/.test(form[i])) {
          err[i] = message?.[i]?.required || "Please fill something";
          continue;
        }
      }
      if (r.min && form[i].length < r.min) {
        err[i] = message?.[i]?.min || "Please fill more than 6 characters";
      }
      if (r.pattern && form[i]) {
        let pattern = r.pattern;
        if (pattern === "email" || pattern === "username") {
          pattern = patternEmail;
        }
        if (pattern === "phone") {
          pattern = patternPhone;
        }
        if (pattern === "name") {
          pattern = patternName;
        }
        if (pattern === "urlFace") {
          pattern = patternFbUrl;
        }
        if (pattern === "urlWeb") {
          pattern = patternWebUrl;
        }
        if (pattern === "password") {
          pattern = patternPassWord;
        }
        if (!pattern.test(form[i])) {
          err[i] =
            message?.[i]?.pattern || "Please fill match the format requested";
        }
      }
      if (r.match && form[r.match]) {
        if (form[i] !== form[r.match]) {
          err[i] = message?.[i]?.match || "Please make sure passwords match ";
        }
      }
    }

    if (Object.keys(err).length === 0) {
      if (form?.checked) {
        sessionStorage.setItem("passWord", JSON.stringify(form));
      }
    }
    setError(err);
    return err;
  };

  return {
    form,
    setForm,
    onSubmit,
    inputChange,
    error,
  };
}

// if (validate[i].match) {
//   let mathVal = form[validate[i].match] || undefined
//   if (mathVal !== form[i]) {
//     errorObj[i] = message?.[i]?.match || "Vui lòng điền giống thông tin cần thiết";
//     continue;
//   }
// }
