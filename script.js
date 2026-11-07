const STORAGE_KEY = "cloudtask-sw ynex-v1".replace(" ", "");
const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const empty = document.getElementById("emptyState");
let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  render();
}
function render() {
  list.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.className = `task-item${task.done ? " done" : ""}`;
    const check = document.createElement("input");
    check.type = "checkbox";
    check.checked = task.done;
    check.setAttribute("aria-label", `Mark ${task.name} completed`);
    check.addEventListener("change", () => {
      task.done = check.checked;
      save();
    });
    const name = document.createElement("span");
    name.className = "task-name";
    name.textContent = task.name;
    const remove = document.createElement("button");
    remove.className = "delete-button";
    remove.type = "button";
    remove.textContent = "Delete";
    remove.addEventListener("click", () => {
      tasks = tasks.filter(item => item.id !== task.id);
      save();
    });
    li.append(check, name, remove);
    list.appendChild(li);
  });
  const completed = tasks.filter(t => t.done).length;
  document.getElementById("totalCount").textContent = tasks.length;
  document.getElementById("completedCount").textContent = completed;
  document.getElementById("remainingCount").textContent = tasks.length - completed;
  document.getElementById("taskSummary").textContent = `${tasks.length} task${tasks.length === 1 ? "" : "s"} · Saved in this browser`;
  empty.hidden = tasks.length > 0;
}
form.addEventListener("submit", event => {
  event.preventDefault();
  const name = input.value.trim();
  if (!name) return;
  tasks.unshift({ id: Date.now().toString(), name, done: false });
  input.value = "";
  save();
  input.focus();
});
document.getElementById("clearCompleted").addEventListener("click", () => {
  tasks = tasks.filter(task => !task.done);
  save();
});
render();
