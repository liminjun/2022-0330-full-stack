import React from "react";
// TODO: import useFormik from formik library
import { useFormik } from 'formik';

function App() {
  // TODO: add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      if (values.email === '123@admin.com' && values.password === '123456') {
        alert('登录成功')
      } else {
        alert('邮箱/密码错误')
      }
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) errors.email = '必填项';
      if (!values.password) errors.password = '必填项';
      return errors;
    }
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>邮箱:</div>
        <input id="email" type="text" name="email" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}

        <div>密码:</div>
        <input id="password" type="text" name="password" onChange={formik.handleChange} value={formik.values.password}/>
        {formik.errors.password ? (
          <div id="passwordError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <br/>
        <button id="submitBtn" type="submit">提交</button>
      </form>
    </div>
  );
}

export default App;
