function clickHandle(e, props, validation, setValidation) {
    e.preventDefault();

    let date = new Date()
    // nameValidator(props.userObj.firstName, setValidation, validation, "firstName")
    
    if(firstNameValidator(props.userObj.firstName,setValidation,validation,"firstName")||lastNameValidator(props.userObj.lastName,setValidation,validation)||numberValidator(props.userObj.number,setValidation,validation)){
        
    }else{
        let userData = { ...props.userObj, id: date.getMilliseconds(), time: date.toLocaleTimeString() }
        props.setFormData([...props.formData, userData]);
        props.setUserObj({ firstName: "", lastName: '', email: '', number: '' })
        setValidation({ firstName: "", lastName: "", email: "", number: "" })
    }
}


function firstNameValidator(str, setValidation, validation) {
    if (str.length < 3 || str.length > 25) {
        setValidation({ ...validation, "firstName" : `First name must be greater than 3 and less than 25 characters` })
        return true
    }
    return false
}
function lastNameValidator(str,setValidation,validation){
    if (str.length < 3 || str.length > 25) {
        setValidation({ ...validation, "lastName": `Last name must be greater than 3 and less than 25 characters` })
        return true
    }
    return false
}
function numberValidator(num, setValidation, validation) {
    
    if(num.length===10){
        return
    }else{
        setValidation({ ...validation, number: "number must be 10 digits" })
        return true
    }
}

export default clickHandle