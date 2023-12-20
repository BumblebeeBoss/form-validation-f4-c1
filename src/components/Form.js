import React,{useState} from 'react'
import { FaEye,FaEyeSlash } from "react-icons/fa6";

const Form = () => {
    const [formData,setFormData]=useState({
        email:"",
        password:"",
        password2:""
    })

    const [emailError,setEmailError]=useState(true);
    const [passwordError,setPasswordError]=useState(true);
    const [password2Error,setPassword2Error]=useState(true);
    const [showPassword,setShowpassword]=useState(false);



const handleChange=(e)=>{
//    console.log(e.target);

   if(e.target.name==="email"){
     const emailPattern= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!emailPattern.test(e.target.value)){
       setEmailError(true);
    }
    else{
        setEmailError(false);
    }
   }
   else if(e.target.name==="password"){
     if(e.target.value.length<8){
        setPasswordError(true);
     }
     else{
        setPasswordError(false);
     }
   }
   else{
     if(e.target.value!==formData.password){
        setPassword2Error(true);
     }
     else{
        setPassword2Error(false)
     }}
   setFormData({...formData,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(!emailError && !passwordError && !password2Error){
     alert("Form Submitted Succesfully");
     setFormData({
         email:"",
         password:"",
         password2:""
     });
     setEmailError(true);
     setPasswordError(true);
     setPassword2Error(true);
    }
    else{
     alert("Form Submit Error--Please Enter Valid Input")
    }
 }

  return (
    <div className="form-validation">
      <h1>Form</h1>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
      <div className="input-group">
          <input type="text"
          className={emailError&&"input-error"}
           name="email" 
           id="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={e=>handleChange(e)}/>
            {emailError&&<small>Enter valid Email Address</small>}
      </div>
          

        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="input-group">
          <input 
          type={showPassword?"test":"password"}
          className={passwordError&&"input-error"} 
          name="password" 
          id="password" 
          placeholder="Enter Password"
          value={formData.password}
          onChange={e=>handleChange(e)}/>
         {passwordError&&<small>Enter valid Password</small>}  
          </div>
         {showPassword?<FaEyeSlash onClick={()=>setShowpassword(false)}/>:<FaEye onClick={()=>setShowpassword(true)}/>} 
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <div className="input-group">
          <input type="password"
           className={password2Error&&"input-error"} 
           name="password2" 
           id="password2"
            placeholder="Confirm Password"
            value={formData.password2}
            onChange={e=>handleChange(e)}
         />
      {password2Error&&<small>Password do not match</small>}  
         </div>
         
        
        </div>
        <button type="submit" onSubmit={e=>handleSubmit(e)}>Submit</button>
      </form>
    </div>
  )
}

export default Form;



