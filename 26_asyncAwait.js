let todosDate = async () => {
  let respone = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await respone.json();
  console.log(data);
};

todosDate();
