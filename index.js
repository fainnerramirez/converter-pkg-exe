const getRandomNumber = () => {
    return Math.floor(Math.random() * 100);
}

const fetchTodos = async () => {
    const randomNumber = getRandomNumber();
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${randomNumber}`);
    const json = await response.json();
    return json;
}

const main = async () => {
    console.log("==============================");
    console.log("Obtieniendo una tarea aleatoria...");
    const todo = await fetchTodos();
    console.log("Tarea obtenida:");
    console.log(todo);
    console.log("Cerrando programa...");

    setTimeout(() => {
        console.log("==============================");
        process.exit(0);
    }, 10000);
}

main();