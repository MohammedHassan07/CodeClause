console.log('index.js')

let todos = [];


const todoContainer = document.getElementById('todos');

async function addTodo() {
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    if (title && content) {
        todos.unshift({ title, content });

        // make a api request
        // const data = await fetchData()
        // console.log('add Todo --> ', data)

        renderTodos();
        document.getElementById('title').value = '';
        document.getElementById('content').value = '';
    }
}

function renderTodos() {
    todoContainer.innerHTML = '';

    todos.forEach((todo, index) => {

        const todoElement = document.createElement('div');
        todoElement.classList.add('todo');
        todoElement.classList.add('mt-15');

        todoElement.innerHTML =

    `
        <div>
            <h4>title - Lorem ipsum dolor sit amet. ${todo.title}</h4>
        </div>
        
        <div class="mt-9">
            <p>${todo.content}</p>
        </div>
        
        <div class="mt-12" style="text-align: right;">
            <button ondblclick="updateTodo()" style="background-color: #3e8cbb;">Update</button>
            <button onclick="deleteTodo()" style="background-color: red;">Delete</button>
        </div>
    `

        todoContainer.appendChild(todoElement);
    });
}


function deleteTodo() {

    console.log('delete clicked')

    // const selectedIndex = todos.findIndex(todo => todo.title === todoTitleElement.textContent);
    // if (selectedIndex !== -1) {
    //     todos.splice(selectedIndex, 1);
    //     renderTodos();
    //     todoDetailsContainer.style.display = 'none';
    // }
}

function updateTodo() {

    console.log('update clicked')

    // const selectedIndex = todos.findIndex(todo => todo.title === todoTitleElement.textContent);
    // if (selectedIndex !== -1) {
    //     const newContent = prompt('Enter new content:', todos[selectedIndex].content);

    //     if (newContent !== null) {
    //         todos[selectedIndex].content = newContent;
    //         renderTodos();
    //         todoDetailsContainer.style.display = 'none';
    //     }
    // }
}

// fetch data 
async function fetchData() {

    const URL = ''
    const response = await fetch(URL, {

        method: 'GET',
        headers: {

            token: token
        }
    }) 

    const data = await response.json()

    return data
}