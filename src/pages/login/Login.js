import React from "react";
import LoginForm from "../../components/login/LoginForm";
import DefaultLayout from "../../components/default-layout/DefaultLayout";
const Login = () => {
  return (
    <div>
      <DefaultLayout>
        <LoginForm />
      </DefaultLayout>
    </div>
  );
};

export default Login;
