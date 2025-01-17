document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");
    const titleBox = document.getElementById("titleBox");
    const descriptionBox = document.getElementById("descriptionBox");
    var taskCount = 0;

    const mongoose = require("mongoose");

    mongoose.connect("mongodb+srv://tayyabk2002:se6bSeGerC1yZsV6@cluster0.w1qpdsc.mongodb.net/Tasks");

    const Task = mongoose.model("Task", {
        title: String, 
        description: String, 
        password: String
    });

    function addTask() {
        const newTitle = titleBox.value;
        const newDescription = descriptionBox.value;
        taskCount++;
        const taskDB = new Task({
            title: newTitle,
            description: newDescription
        });
        taskDB.save()
            .then(() => console.log("Task saved successfully"))
            .catch(err => console.error("Error saving task:", err));

        const taskContainer = document.getElementById("listContainer");
        const newTask = document.createElement("div");
        newTask.innerHTML = `
            </br>
            <h3>Task #${taskCount}</h3>
            </br>
            <div id="${newTitle}">Title: ${newTitle}</div>    
            </br>
            <div id="${newDescription}">Description ${newDescription}</div> 
            </br>
            <button> Mark as Done </button>   
        `;

        taskContainer.appendChild(newTask);
    }

    // Set the onclick listener inside the DOMContentLoaded event
    btn.onclick = addTask;
});
