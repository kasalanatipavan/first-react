import React from 'react';
import logo from './logo.svg';
import './App.css';
import todosData from './tododata.js';
import TodoItem from './TodoItem';
import AddItem from './AddItem';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      data:todosData
    }
    this.handlechange=this.handlechange.bind(this);
    this.addchange=this.addchange.bind(this);

  }

  handlechange(text){

    this.setState(prevState=>{
      const updateState=this.state.data.map(todo=>{
        if(todo.text===text){
          todo.completed= !todo.completed
        }
        return todo
      })
      return {
        data:updateState
      }
    })

  }

  addchange(todotext){
    const todoinfo={
      id:"",
      text:todotext,
      completed:false
    }
    //let todo = JSON.stringify(todoinfo);
    this.setState(prevState=>{
      return{
      data:[...this.state.data,todoinfo]
      }
    })
  }
  
  
  render(){
    const todoItem=this.state.data.map(item=> <TodoItem key={item.text} item={item} 
      handlechange={this.handlechange} />)
    return (
      <div className="todo-list">
        <AddItem addchange={this.addchange} />
        {todoItem}
      </div>

    )
  }


}

export default App;
