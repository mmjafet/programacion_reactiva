var idCount = 1;
var data = [];

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");

    const taskInput = document.getElementById("task");
    const taskDescriptionInput = document.getElementById("task-description");
    const listaDatos = document.getElementById("hero");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const task = taskInput.value.trim();
        const description = taskDescriptionInput.value.trim();

        const newTask = {
            id: idCount++,
            task: task,
            description: description,
            status: false,
        };

        data.push(newTask);

        // Limpiar el contenido de listaDatos antes de agregar las tareas
        listaDatos.innerHTML = '';

        data.map((taskItem) => {
            const nuevoElemento = taskItem.status ?
                `<div class="hero-card hero-card--complete">
                    <div class="card_task">
                        <p>${taskItem.task}</p>
                        <span>${taskItem.description}</span>
                    </div>
                    <div class="card_buttons">
                        <button class="check" onClick="actualizar(${taskItem.id})"><i class="bi bi-check-circle"></i></button>
                        <button class="delete" onClick="eliminar(${taskItem.id})"><i class="bi bi-trash"></i></button>
                    </div>
                </div>` :
                `<div class="hero-card">
                    <div class="card_task">
                        <p>${taskItem.task}</p>
                        <span>${taskItem.description}</span>
                    </div>
                    <div class="card_buttons">
                        <button class="check" onClick="actualizar(${taskItem.id})"><i class="bi bi-check-lg"></i></button>
                        <button class="delete" onClick="eliminar(${taskItem.id})"><i class="bi bi-trash"></i></button>
                    </div>
                </div>`;
            listaDatos.innerHTML += nuevoElemento;
        });

        // Limpiar los campos del formulario después de agregar la tarea
        taskInput.value = '';
        taskDescriptionInput.value = '';
    });
});

const actualizar = (id) => {
    const newData = data.map((taskItem) => {
        if (taskItem.id === id) {
            return { ...taskItem, status: !taskItem.status };
        } else {
            return taskItem;
        }
    });
    data = newData;
};

const eliminar = (id) => {
    const newData = data.filter(task => task.id !== id);
    data = newData;
};