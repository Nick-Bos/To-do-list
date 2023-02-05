import projectConstructor from "./projectConstructor";

//arrays
const projectArray = [];
const tasksArr = [];
let projectIndex = 0;
let taskIndex = 0;

const newProject1 = (projectName) => {
  projectIndex += 1;
  const newProject = new projectConstructor(projectName, projectIndex);
  return newProject;
};

//constants
const taskBtn = document.getElementById("taskBtn");
const projBtn = document.getElementById("projBtn");
const proj = document.querySelector(".side");
const projContainer = document.createElement("div");
const projName = document.createElement("p");
const projInput = document.createElement("input");
const projAdd = document.createElement("button");
const projCancel = document.createElement("button");

//content
projName.innerHTML = "Project Name";
projAdd.innerHTML = "Add";
projCancel.innerHTML = "Cancel";

const projects = () => {
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
      const projectTasks = document.createElement("div");
      const projectUl = document.createElement("ul");
      const projAnc = document.createElement("a");
      const projDelete = document.createElement("a");
      projDelete.classList = "projectDelete";
      projectArray.push(newProject1(projInput.value));

      //display project name funtion
      function displayProjArr(array) {
        for (let i = 0; i < array.length; i++) {
          let newName = array[i].name;
          projAnc.innerHTML = newName;
        }
      }

      //Dom
      projects.appendChild(projectContainer);
      projectContainer.appendChild(projectUl);
      projectUl.appendChild(projAnc);
      projectContainer.appendChild(projDelete);
      projDelete.innerHTML = "Delete";
      displayProjArr(projectArray);
      projInput.value = "";

      //opens project details window
      projAnc.addEventListener("click", () => {
        for (let i = 0; i < projectArray.length; i++) {}
      });
    }
  });
};

export default projects;
