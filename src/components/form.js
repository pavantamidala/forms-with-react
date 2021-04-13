import React, { useRef }  from "react";


function FormComponent(props) {
    let fnameRef = useRef()
    function handleClick(e) {
        e.preventDefault();
        let userData = {};
        let date = new Date()
        userData["firstName"] = e.target.elements.firstName.value;
        userData["lastName"] = e.target.elements.lastName.value;
        userData["id"] = date.getMilliseconds()
        props.setFormData([...props.formData, userData]);
        console.log(userData)
    }

    return (
        <form onSubmit={handleClick}>
            First Name:
            <input type="text" onChange={(e)=>e.target.value} name="firstName" /> <br />
      Last Name:
            <input type="text" name="lastName" /> <br />
            <button>click </button>
        </form>
    );
}

export default FormComponent