// console.log('testing')

const input = document.getElementById("todo-input");
const btn = document.getElementById("btn");
const list_container = document.querySelector(".list-container-actual");
// console.log(input,btn)

const postFetch = async (url, data) => {
  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
};
// create todo
const createTodo = (data) => {
  // create elements
  const li = document.createElement("li");
  const exit = document.createElement("span");
  li.textContent = data;
  exit.textContent = "X";
  // exit.classList.add('del')
  exit.setAttribute("class", "del");
  li.setAttribute("class", "list-item");

  //   append x-button to li
  li.appendChild(exit);
  list_container.appendChild(li);

  const dels = document.querySelectorAll(".del");
  // console.log(dels)
  dels.forEach((d) => {
    d.onclick = (e) => {
      // li
      let item = e.target.parentElement;
      //   console.log(item);
      list_container.removeChild(item);
    };
  });
};
// event listener
btn.onclick = (e) => {
  //prevent the form's submit button from firing
  e.preventDefault();
  //   create an object to send to the server
  let dataObj = { todo: input.value };
  let url = "api/todo";
  //   postfetch fn
  postFetch(url, dataObj).then((data) => {
    createTodo(data.todo);
  });
  // reset input's value to an empty string
  input.value = "";
};
