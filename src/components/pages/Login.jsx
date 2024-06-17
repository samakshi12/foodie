import React,{useState} from 'react';
import { Link,useNavigate} from 'react-router-dom';


export default function Login() {
   let navigate=useNavigate();
   const [credentials, setCredentials] = useState({email:"", password:""});
    const handleSubmit = async(e)=>{
    e.preventDefault();
   try {
            const response = await fetch("http://localhost:4000/api/loginuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password,

                })
            });

            const json = await response.json();
            console.log(json);

            if (!json.success) {
                alert("Enter valid credentials!");
            } else {
                localStorage.setItem("userEmail", credentials.email)
                localStorage.setItem("authToken", json.authToken);
                console.log(localStorage.getItem("authToken"));
                alert("You are logged in!");
                navigate("/");
            }
        } catch (error) {
            console.error("Error during fetch:", error);
            alert("There was an error processing your request. Please try again later.");
        }
    }

    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }
    
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text"> </div>
    </div>
    <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
    </div>
        <button type="submit" className="m-3 btn btn-success">Submit</button>
    <Link to="/signup" className='m-3 btn btn-danger'>Not a user?</Link>
    </form>
    </div>
    </>
  )}