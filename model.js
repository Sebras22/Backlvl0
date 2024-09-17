export default function addTask(tasks, name, description) {
    var newTask = {
        name: name,
        description: description,
    };
    tasks.push(newTask);
}
