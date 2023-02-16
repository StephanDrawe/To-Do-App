function TodoForm({addTodo}){
    //initialize input for form
    const [inputText, setInputText] = React.useState('');

    //submit function
    const handleSubmit = e => {
        e.preventDefault();
        if (!inputText) return;
        addTodo(inputText);
        setInputText('');
    };

    return (<>
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                className="input"
                value={inputText}
                placeholder="Add Todo..."
                onChange={e => setInputText(e.target.value)} />
                <button class="btn btn-outline-success" onClick={handleSubmit}>submit</button>
        </form>
    </>);
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);