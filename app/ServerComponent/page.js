async function ServerComponent() {
    try {
        const todos = await fetch("https://jsonplaceholder.typicode.com/todos").then(res => res.json())
        return todos.map((todo) => {

            return (<li
                key={todo.id}
                className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
            >
                <h2 className="text-lg capitalize">{todo?.title}</h2>
            </li>)
        })
    } catch (error) {
        return <p>Error</p>
    }
}

export default ServerComponent