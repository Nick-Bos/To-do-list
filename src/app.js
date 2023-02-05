import { createTask } from "./createTask";
import projects from "./projects";

const app = () => {
  createTask();
  projects();
};

export default app;
