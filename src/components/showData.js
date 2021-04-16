import React from "react"
import deletePerson from "./deletePerson"
function ShowData(props){
    
    function editPerson(e,obj){
        props.setUserObj({firstName:obj.firstName,lastName:obj.lastName,email:obj.email,number:obj.number})
        deletePerson(e,obj.id,props)
    }
    return(
        <div className="user-data">
            {
                props.formData.map((obj) => {
                    return <div key={obj.id}>
                        <h3>{obj.firstName}</h3>
                        <h3>{obj.lastName}</h3>
                        <h4> {obj.number} </h4>
                        <h4> {obj.email} </h4>
                        <button className="delete-btn btn" onClick={(e)=>deletePerson(e,obj.id,props)}>Delete</button>
                        <button className="edit-btn btn" onClick={(e)=>editPerson(e,obj)}>Edit</button>
                    </div>
                })
            }
        </div>
    )
}

export default ShowData;