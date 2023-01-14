import { useRef } from "react";
import { useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link';



 




const LoginForm = () => {
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$');
 
    const [show, setShow] = useState(false) 
    const[emailErr, setEmailErr] = useState(' ')
    const[password, setPassErr] = useState(' ')
    const emailInputRef = useRef()
    const passwordInputRef = useRef()
    const router = useRouter()

    //toggle of show and hide password
    function setFnc(){
    setShow(!show)
    }   

    async function submitHandler(event){
        event.preventDefault()
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        //validation
        if(enteredEmail.length<15){
            setEmailErr('Email Lenght must be greater than Fifteen')
            return;
        }
        if (!validPassword.test(enteredPassword)) {
            setPassErr('Password must contain special character(s), and  uppercase');
            return;
         }else{
            setPassErr('Good Password');
         }
         //collection of data
         const data = {
            username: enteredEmail,
            password: enteredPassword,
         }
        const response =  await fetch('api/login/login-form',{
            method : 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            },

        });
        const userData = await response.json()
        if(!response.ok){
            throw new Error(userData.message || 'something went wrong')
        }
        await router.push('/portfolio')


    }
    return ( 
        <div>
             <form onSubmit={submitHandler}>
                <div>
                   <label htmlFor="email">Email</label>
                   <input type='email' 
                   required id="email" 
                   name = "username"
                   ref={emailInputRef}/>
                  
                </div>
                <div>
                    {emailErr}
                </div>
                <div>
                   <label htmlFor="password">Password</label>
                   
                   <input type={show?"text":"password"}
                    required id="password"
                    name="password" 
                    ref={passwordInputRef}/>

                   <span onClick={setFnc}>{show?"Hide":"Show"}</span>
                   <div>
                    {password}
                   </div>
                </div>
                <div>
                <input type='checkbox' id="remember"/>
                <label htmlFor="remember">Remember Me</label>
                
                </div>
                 
                <button type="submit">Login</button>
                
            </form>
            <button type="button">Forgot Password?</button>
            <p>You do not have an Account? <Link href='/' target='_blank'>Register</Link></p>
        </div>
     );
}
 
export default LoginForm;