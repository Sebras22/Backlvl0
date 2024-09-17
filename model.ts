interface Task {
    name: string;
    description: string;
}

let t1: Task = {
    name: "truc",
    description: "jyZQFDSUQYZD",
};

export function addTask(
    tasks: Array<Task>,
    name: string,
    description: string
): Array<Task> {
    let newTask: Task = {
        name: name,
        description: description,
    };

    return tasks.concat([newTask]);
}
