import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup()
{
    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({name:"", email:"", password:"", address:""});
    const handleSubmit = async(e)=>{
        e.preventDefault();
    //     const response = await fetch("http://localhost:4000/api/createuser",{
    //         method: 'POST',
    //         headers:{
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password,address:credentials.address })
    //     });

    //     const json = await response.json()
    //     console.log(json)

    //     if(!json.success)
    //     {
    //        alert("Enter valid credentials!")
    //     }
            
    // }

     try {
            const response = await fetch("http://localhost:4000/api/createuser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                    address: credentials.address
                })
            });

            const json = await response.json();
            console.log(json);

            if (!json.success) {
                alert("Enter valid credentials!");
            } else {
                alert("User created successfully!");
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

    return(
     <>
    <div className='container'>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
    </div>   <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
    </div>
     <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control" id="exampleInputPassword1" name='address' value={credentials.address} onChange={onChange}/>
    </div>
    <button type="submit" className="m-3 btn btn-success">Submit</button>
    <Link to="/login" className='m-3 btn btn-danger'>Already a user?</Link>
    </form>
    </div>
    </>
    )
}