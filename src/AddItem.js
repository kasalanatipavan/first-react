import React from "react"

function AddItem(props){
    return(
        <div>
            <form>
                <input type="text" id="todo" placeholder="add todo..."/>
                <input type="button" value="Add" onClick={()=>props.addchange(document.getElementById("todo").value.toString())}/> 
                
            </form>
        </div>
    )
}

export default AddItem