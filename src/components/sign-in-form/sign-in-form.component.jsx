import { useState } from "react";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields; 
  const handleSubmit = async (event) => {

    event.preventDefault();
};
 

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
    </div>
  );
};

export default SignInForm;
