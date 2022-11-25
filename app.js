const input = document.getElementById("input");
const createButton = document.getElementById("createButton");
const todoList = document.getElementById("todoList");

const createTodo = () => {
    if(input.value.trim() === "") {
        return false
    }else {
        const div = document.createElement("div");
        const text = document.createElement("h3");
        const delButton = document.createElement("button");

        delButton.setAttribute("class", "delButton")

    div.setAttribute("class", "blockText");

    text.innerText = input.value;

    todoList.append(div)
    div.append(text)
    text.append(delButton, "delete")



    }
    input.value = ""
}

createButton.addEventListener("click", createTodo)

input.addEventListener("keydown", e => e.keyCode === 13 ? createTodo() : false)
