
function deletePerson(e, id,props) {
    props.setFormData(props.formData.filter((obj) => obj.id !== id))
}


export default deletePerson