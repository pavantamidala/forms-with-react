import React from "react"

function ShowData(props){
    function deletePerson(e,id){
        props.setFormData(props.formData.filter((obj)=>obj.id !== id))
    }
    function editPerson(){
        
    }
    return(
        <div>
            {
                props.formData.map((obj) => {
                    return <div key={obj.id}>
                        <h3>{obj.firstName}</h3>
                        <h3>{obj.lastName}</h3>
                        <button onClick={(e)=>deletePerson(e,obj.id)}>Delete</button>
                        <button onClick={editPerson}>Edit</button>
                    </div>
                })
            }
        </div>
    )
}

export default ShowData;