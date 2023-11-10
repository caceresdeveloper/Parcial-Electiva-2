
const data = {
  "tasks": {
    "one": {
      "task": "Learning Javascript",
      "state": true,
      "end": "2020/10/21"
    },
    "two": {
      "task": "Reader Book Clean Code",
      "state": false,
      "end": "2023/12/31"
    },
    "three": {
      "task": "Running",
      "state": false,
      "end": "2023/06/25"
    },
    "four": {
      "task": "Pass the Evaluation",
      "state": false,
      "end": "2023/11/09"
    },
    "five": {
      "task": "Go to Karaoke",
      "state": true,
      "end": "2022/08/25"
    },
    "six": {
      "task": "Finish watching the serie",
      "state": false,
      "end": "2023/12/31"
    },
    "seven": {
      "task": "Controll Weight",
      "state": false,
      "end": "2020/11/22"
    }
  }
}

let output = '';

for (const lista in data.tasks) {
  output += `lista: ${lista}<br>`;
  const tareas = data[lista];
  for (const task in tareas) {
    output += `  tarea: ${task}<br>`;
    const details = tareas[task];

    for (const key in details) {
      output += `    ${key}: ${details[key]}<br>`;
    }
  }
}

console.log(output);

let trueTasksOutput = '';
let falseTasksOutput = '';

for (const taskKey in data.tasks) {
  const task = data.tasks[taskKey];
  const taskOutput = `Task: ${task.task}, State: ${task.state}, End Date: ${task.end}<br>`;

  if (task.state) {
    trueTasksOutput += taskOutput;
  } else {
    falseTasksOutput += taskOutput;
  }
}

document.getElementById('completa').innerHTML = trueTasksOutput
document.getElementById('incompleta').innerHTML = falseTasksOutput



const tableBody = document.getElementById('Table1');

for (const taskKey in data.tasks) {
  const taskDetails = data.tasks[taskKey];
  const row = tableBody.insertRow();
  row.insertCell(0).textContent = taskKey;
  row.insertCell(1).textContent = taskDetails.task;
  row.insertCell(2).textContent = taskDetails.state
  row.insertCell(3).textContent = taskDetails.end;
}



document.getElementById("agregarTarea").addEventListener("click", function () {
  // Obtener los valores ingresados por el usuario
  const tareaId = document.getElementById("tareaId").value;
  const tareaNombre = document.getElementById("tareaNombre").value;
  const tareaEstado = document.getElementById("tareaEstado").value;
  const tareaEnd = document.getElementById("tareaEnd").value;


  if (data.tasks[tareaId]) {
    console.log("La tarea con ID " + tareaId + " ya existe. Por favor, elija otro ID.");
    return;
  }
  data.tasks[tareaId] = {
    "task": tareaNombre,
    "state": tareaEstado,
    "end": tareaEnd
  };

  const tableBody = document.getElementById('Table1');

  for (const taskKey in data.tasks) {
    const taskDetails = data.tasks[taskKey];
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = taskKey;
    row.insertCell(1).textContent = taskDetails.task;
    row.insertCell(2).textContent = taskDetails.state
    row.insertCell(3).textContent = taskDetails.end;
  }

  console.log("Se ha agregado una nueva tarea:");
  console.log(data.tasks[tareaId]);
});