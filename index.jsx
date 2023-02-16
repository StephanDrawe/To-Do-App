function App(){
    const [todos, setTodos] = React.useState([
        {
            text: 'learn react',
            isComplete: false,
        },
        {
            text: 'eat lunch',
            isComplete: false,
        },
        {
            text: 'create todo app',
            isComplete: false,
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text: text, isComplete: false}];
        setTodos(newTodos);
    }

    //remove function
    const removeTodo = index => {
        let temp = [...todos];
        temp.splice(index, 1);
        setTodos(temp);
    };


    return (<>
        <div className="app">
            <div className="todo-list">
                <div class="list-group">
                <a href="#" class="list-group-item list-group-item-action">{todos.map((todo, i) => 
                    <Todo 
                        index={i} 
                        key={i}
                        todo={todo} 
                        remove={removeTodo}
                    ></Todo>)}
                    <TodoForm addTodo={addTodo}></TodoForm></a>
                </div>
            </div>
        </div>
    </>);
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);