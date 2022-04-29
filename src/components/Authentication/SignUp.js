import React from 'react'
// COMPONENTSs
import FormInput from '../ReusableComponets/FormInput';
import Form from '../ReusableComponets/Form';
import FormFooter from '../ReusableComponets/FormFooter';

export default function SignUp() {
      // TO PASS PROPS TO THE LOGIN FORM
    const initialValues = {
        fullname: '',
        email: '',
        password: '',
        phonenumber: '',
    };
    // ------ CHANGE INTO A DISPATCH ACTION --------- 
    const handleSignUp = (form) => {
        console.log("Submitted, Signed Up, User: ", form)
    }
  return (
    <section className="signup_section">
        <h2>Sign Up for Cyclepedia</h2>
        <Form formEvent={handleSignUp} initialValues={initialValues} buttonText={"Sign Up"}>
            <FormInput 
                label={"Full Name:"} type={"text"} name={"fullname"}
            />
            <FormInput 
                label={"Phone Number:"} type={"number"} name={"phonenumber"}
            />            
            <FormInput 
                label={"Email:"} type={"email"} name={"email"}
            />
            <FormInput 
                label={"Password:"} type={"password"} name={"password"} password=""
            />     
        </Form>
        <FormFooter text={"Already have an account?"} url={"/login"} urlText={"Log In"} />   
    </section>
  )
}
