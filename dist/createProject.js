import { projectMaker } from "./projectConstrutor";
import { taskMaker } from "./taskConstructor";
import { displayTasks } from "./displayTasks";
const projArr = [];
const tasksArr = [];

const createProject = () => {
  // declare variables
  const taskBtn = document.getElementById("taskBtn");
  const projBtn = document.getElementById("projBtn");
  const proj = document.querySelector(".side");
  const projContainer = document.createElement("div");
  const projName = document.createElement("p");
  const projInput = document.createElement("input");
  const projAdd = document.createElement("button");
  const projCancel = document.createElement("button");
  let a = -1;
  // Dom element content
  projName.innerHTML = "Project Name";
  projAdd.innerHTML = "Add";
  projCancel.innerHTML = "Cancel";

  //Dom element classlists/id
  projContainer.id = "projContainer";

  //add project btn event listener
  projBtn.addEventListener("click", () => {
    const target = document.getElementById("projContainer");
    if (document.contains(target)) {
      return;
    } else {
      proj.appendChild(projContainer);
      projContainer.appendChild(projName);
      projContainer.appendChild(projInput);
      projContainer.appendChild(projAdd);
      projContainer.appendChild(projCancel);
      taskBtn.classList.remove();
      taskBtn.classList.add("add-task-toggle");
      const projBtn = document.getElementById("projBtn");
      projBtn.classList.remove("projBtn");
      projBtn.classList.add("add-task-toggle");
    }
  });

  //project add btn event listener
  projAdd.addEventListener("click", () => {
    if (projInput.value === "") {
      alert("Please enter a Project Name");
    } else {
      const projects = document.querySelector(".projects");
      const projectContainer = document.createElement("div");
      projectContainer.classList.add("projectsContainer");
      const projectUl = document.createElement("ul");
      const anc = document.createElement("a");
      const projNameArr = new projectMaker(projInput.value);
      projArr.push(projNameArr);

      //display to page
      function displayArr(arg) {
        for (let i = 0; i < arg.length; i++) {
          let newName = arg[i].name;
          anc.id = [i];
          anc.innerHTML = newName;
        }
      }
      projects.appendChild(projectContainer);
      projectContainer.appendChild(projectUl);
      projectUl.appendChild(anc);
      displayArr(projArr);
      projInput.value = "";

      anc.addEventListener("click", () => {
        for (let i = 0; i < projArr.length; i++) {
          if (anc.id == [i]) {
            const test = document.createElement("div");
            const newtask = document.createElement("li");
            const subAnc = document.createElement("a");
            const titleLabel = document.createElement("p");
            const titleInput = document.createElement("input");
            const descLabel = document.createElement("p");
            const descInput = document.createElement("textarea");
            const taskAdd = document.createElement("button");
            const taskCancel = document.createElement("button");

            projectContainer.appendChild(test);
            test.appendChild(titleLabel);
            test.appendChild(titleInput);
            test.appendChild(descLabel);
            test.appendChild(descInput);
            test.appendChild(taskAdd);
            test.appendChild(taskCancel);

            titleLabel.innerHTML = "Task Title";
            descLabel.innerHTML = "Description";
            descInput.id = "descInput";
            descInput.rows = "5";
            descInput.cols = "22";
            taskAdd.innerHTML = "Add";
            taskAdd.id = "taskAdd";
            taskCancel.innerHTML = "Cancel";

            //add sub task event
            taskAdd.addEventListener("click", () => {
              a++;
              console.log(a);
              if (titleInput.value === "") {
                alert("Please enter a task Title");
              } else {
                const newTaskArr = new taskMaker(
                  titleInput.value,
                  descInput.value
                );

                projectContainer.appendChild(newtask);
                newtask.appendChild(subAnc);
                tasksArr.push(newTaskArr);

                for (let i = 0; i < tasksArr.length; i++) {
                  let newTitle = tasksArr[i].title;
                  subAnc.id = a;
                  subAnc.innerHTML = newTitle;
                }
              }
              console.log(tasksArr);
              console.log(subAnc.id);

              projectContainer.removeChild(test);
            });

            //cancel sub task event
            taskCancel.addEventListener("click", () => {
              projectContainer.removeChild(test);
            });

            //subanc event listener
            subAnc.addEventListener("click", (e) => {
              for (let i = 0; i < tasksArr.length; i++) {
                if (subAnc.id == [i]) {
                  console.log(tasksArr[i]);

                  //edit the below
                  /*
                  tasks.removeChild(tasksContainer);
                  tasks.appendChild(taskFocus);
                  taskFocus.appendChild(tfTitle);
                  tfTitle.innerHTML = myArray[i].title;
                  taskFocus.appendChild(tfDescLabel);
                  taskFocus.appendChild(tfDescBox);
                  tfDescBox.rows = "5";
                  tfDescBox.cols = "22";
                  taskFocus.appendChild(tfDate);
                  taskFocus.appendChild(tfClose);
                  taskFocus.appendChild(tfDelete);

                  tfDescLabel.innerHTML = "Description";
                  tfDescBox.innerHTML = String(myArray[i].description);

                  tfClose.innerHTML = "Close";
                  tfDelete.innerHTML = "Delete";

                  //deletes the task
                  tfDelete.addEventListener("click", () => {
                    tasks.removeChild(taskFocus);
                    tasks.removeChild(tasksContainer);
                    myArray.splice(i, 1, 0);
                  });

                  //closes the taskFocus window
                  tfClose.addEventListener("click", () => {
                    tasks.removeChild(taskFocus);
                    tasks.appendChild(tasksContainer);
                  });
                  //edit the above */
                }
              }
            });
          }
        }
      });
    }
  });

  //project focus cancel btn event listener
  projCancel.addEventListener("click", () => {
    proj.removeChild(projContainer);
    taskBtn.classList.remove("add-task-toggle");
    taskBtn.classList.add("button");
    const projBtn = document.getElementById("projBtn");
    projBtn.classList.remove("add-task-toggle");
    projBtn.classList.add("projBtn");
    projInput.value = "";
  });
};

export { createProject };
