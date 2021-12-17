import React, {useState} from 'react';
import axios from "axios";
import styled from 'styled-components';

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const FormGroup = styled.form`
    padding:1rem;
`

const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width:100%;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`
const initialValues = {
    username: "Lambda",
    password: "School"
}

const errorInitialValues = {
    error: ""
};


const Login = () => {
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState(errorInitialValues);

    const login = () => {
        axios.post("http://localhost:5000/api/login", values)
            .then(res => {
                console.log(res)
                const token = res.data.token;
                const role = res.data.role;
                const username = res.data.username;

                localStorage.setItem("token", token);
                localStorage.setItem("role", role);
                localStorage.setItem("username", username);
                window.location.href = "/view";
            })
            .catch(err => {
                console.error(err);
                setError(err.response.data);
            });
    } ;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        setValues({
            ...values,
            [name]: value
        });
    };

    const onSubmit = evt => {
        evt.preventDefault();
        login();
    };

    return(
        <ComponentContainer>
            <ModalContainer>
                <h1>Welcome to Blogger Pro</h1>
                <h2>Please enter your account information.</h2>
            </ModalContainer>
            <div>
                <FormGroup onSubmit={onSubmit}>
                    <Label>Username:&nbsp;</Label>
                    <Input
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={onChange}
                    />
                    <Label>Password:&nbsp;</Label>
                    <Input
                        type="text"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                    <Button>Login</Button>
                </FormGroup>
                <p id="error" >{error.error}</p>
            </div>
        </ComponentContainer>
    );
}

export default Login;

//Task List
//1. Build login form DOM from scratch, making use of styled components if needed. Make sure the username input has id="username" and the password input as id="password".
//2. Add in a p tag with the id="error" under the login form for use in error display.
//3. Add in necessary local state to support login form and error display.
//4. When login form is submitted, make an http call to the login route. Save the auth token on a successful response and redirect to view page.
//5. If the response is not successful, display an error statement. **a server provided error message can be found in ```err.response.data```**
//6. MAKE SURE TO ADD id="username", id="password", id="error" AND id="submit" TO THE APPROPRIATE DOM ELEMENTS. YOUR AUTOTESTS WILL FAIL WITHOUT THEM.


