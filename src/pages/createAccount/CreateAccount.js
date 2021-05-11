import React from "react";
import CreateAccountForm from "../../components/createAccount/CreateAccountForm";
import DefaultLayout from "../../components/default-layout/DefaultLayout";

const CreateAccount = () => {
  return (
    <div>
      <DefaultLayout>
        {" "}
        <CreateAccountForm />
      </DefaultLayout>
    </div>
  );
};

export default CreateAccount;
