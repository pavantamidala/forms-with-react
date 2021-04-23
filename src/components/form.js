import "./form-validation.css"
import React from "react";
import { useState } from "react";
import clickHandle from './clickHandle';
import TextField from '@material-ui/core/TextField';


function FormComponent(props) {
    const [validation,setValidation] = useState({firstName:"",lastName:"",email:"",number:""})
    return (
        <form className="form"  onSubmit={(e) => clickHandle(e, props,validation,setValidation)}>
            
            <TextField label="First Name" variant="outlined" type="text" id="firstName" value={props.userObj.firstName} name="firstName" onChange={e => props.setUserObj({ ...props.userObj, "firstName": e.target.value })} /> <br />
            <p className="validation firstName-validation"> {validation.firstName} </p>


            
            <TextField label="Last Name" variant="outlined" type="text" id="lastName" value={props.userObj.lastName} onChange={e => props.setUserObj({ ...props.userObj, "lastName": e.target.value })} name="lastName" /> <br />
            <p className="validation lastName-validation"> {validation.lastName} </p>



            
            <TextField label="Email" variant="outlined" type="email" name="email" id="email" value={props.userObj.email} onChange={(e) => props.setUserObj({ ...props.userObj, "email": e.target.value })} /> <br/>
            <p className="validation email-validation"> {validation.email} </p>


            
            <TextField label="Ph Number" variant="outlined" type="number" id="number" name="number" value={props.userObj.number} onChange={(e) => props.setUserObj({ ...props.userObj, number: e.target.value })} />
            <p className="validation number-validation"> {validation.number} </p>
            <button  className="submit-btn btn">Submit </button> 
            
        </form>
    );
}

export default FormComponent