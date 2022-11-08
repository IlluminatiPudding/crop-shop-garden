// import styled from "styled-components";


// const Container = styled.div`
//   width: 100vw;
//   height: 100vh;
//   background: linear-gradient(
//       rgba(255, 255, 255, 0.5),
//       rgba(255, 255, 255, 0.5)
//     ),
//     url("https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")
//       center;
//   background-size: cover;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Wrapper = styled.div`
//   width: 50%;
  

//   padding: 40px;
//   background-color: white;
 
// `;

// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: 300;
// `;



// const Form = styled.form`
//   display: flex;
//   flex-wrap: wrap;
// `;

// const Input = styled.input`
//   flex: 1;
//   min-width: 40%;
//   margin: 20px 10px 0px 0px;
//   padding: 10px;
// `;

// const Indiv = styled.div`
// display: flex;
// align-items: center;
// justify-content: center;
//   padding: 10px 20px;
// `;


// const Agreement = styled.span`
//   font-size: 12px;
//   margin: 20px 10px;
// `;

// const Button = styled.button`
//   width: 40%;
//   border: none;
//   padding: 15px 20px;
//   background-color: teal;
//   color: white;
//   cursor: pointer;
// `;
// const Radio = styled.div`
  
//   padding: 0px 70px;
// `;

// const Register = () => {
//   return (
//     <Container>
//       <Wrapper>
//         <Title>CREATE AN ACCOUNT</Title>
//         <Form>
//           <Input placeholder="name" />
//           <Input placeholder="last name" />
//           <Input placeholder="username" />
//           <Input placeholder="email" />
//           <Input placeholder="password" />
//           <Input placeholder="confirm password" />

          
//           <Indiv>
//             <Radio>
//             <label>Farmer</label>
//             <input type="radio" name="tt"/>
//             </Radio>
//             <Radio>
//             <label>Buyer</label>
//             <input type="radio" name="tt"/>
//             </Radio>
//             <Radio>
//             <label>Admin</label>
//             <input type="radio" name="tt"/>
//             </Radio>
          
          
//           </Indiv>
          
          
          
//           <Agreement>
//             By creating an account, I consent to the processing of my personal
//             data in accordance with the <b>PRIVACY POLICY</b>
//           </Agreement>
//           <Button>CREATE</Button>
//         </Form>
//       </Wrapper>
//     </Container>
//   );
// };

// export default Register;




import { useState } from "react";
import "./register.css";
import FormInput from "../components/FormInput";

import NavH from "../components/NavH";






const RegisterAdmin = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
   
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Admin's Name",
      errorMessage:
        "Farmer Name should be 3-16 characters and shouldn't include any special character!",
      label: "User Name",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <NavH />
    <div className="register">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default RegisterAdmin;
