import React from "react"
function TodoItem(props){
    const datastyle={
        fontStyle:"italic",
        color:"grey",
        textDecoration: "line-through"

    }
    return(
        <div className="todo-item">
            <input type="checkbox" checked={props.item.completed}
            onChange={()=> props.handlechange(props.item.text)}/>
            <p style={props.item.completed ? datastyle : null}>{props.item.text}</p>
            
        </div>
        
    )
}

export default TodoItem