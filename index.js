const todos = [

]

const container = document.getElementById("container");
const Input = document.getElementById("Input");
const btnadd = document.getElementById("btnadd");

btnadd.addEventListener("click" , ()=>{

    const todovalue = {
        todoinput:Input.value,
      
    }

todos.push(todovalue);
Input.value =""
 

const p = document.createElement("h2");
const div = document.createElement("div");

p1.innerText = todovalue.todoinput
    
div.appendChild(p)
container.appendChild(div)
      
})

