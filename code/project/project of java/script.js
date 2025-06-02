function addTask() {
    let input = document.getElementById("task-input");
    let taskText = input.value.trim();
  
    if (taskText === "") return;
  
    let li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleDone(this)">${taskText}</span>
      <button onclick="removeTask(this)">❌</button>
    `;
  
    document.getElementById("task-list").appendChild(li);
    input.value = "";
  }
  
  function removeTask(button) {
    button.parentElement.remove();
  }
  function toggleDone(span) {
    span.parentElement.classList.toggle("completed");
  }
