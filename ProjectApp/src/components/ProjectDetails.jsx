import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import classes from "../components/ProjectDetails.module.css";
import Task from "./Task";
import AddTaskModal from "./AddTaskModal";
import { projectsActions } from "../store/projectList-slice";

export default function ProjectDetails() {
    const [taskAdding, setTaskAdding] = useState(false);
    const dispatch = useDispatch();

    const projects = useSelector((state) => state.projects.projects);
    const currentlyActive = useSelector((state) => state.projects.currentlyActiveProject);

    const activeProject = projects.find((project) => project.id === currentlyActive);

    function handleAddTask() {
        setTaskAdding(!taskAdding);
    }

    function handleRemoveProject() {
        dispatch(projectsActions.removeProject(activeProject.id));
    }

    return (
        <>
            {taskAdding && <AddTaskModal closeModal={handleAddTask} />}
            <div className={classes.projectDetailsContainer}>
                <h2 className={classes.projectHeading}>{activeProject.title}</h2>
                <p className={classes.projectDate}>{activeProject.date}</p>
                <p className={classes.projectDescription}>{activeProject.description}</p>
                <div className="flex flex-col gap-4 mt-6">
                    {activeProject.tasks.length === 0 ? (
                        <p className="text-gray-500 text-lg">No tasks</p>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-4 sm:grid-cols-2">
                            {activeProject.tasks.map((task) => (
                                <Task key={task.id} title={task.title} description={task.description} date={task.date} id={task.id} />
                            ))}
                        </div>
                    )}
                    <div className={classes.buttonContainer}>
                        <button onClick={handleAddTask} disabled={taskAdding} className="px-6 py-2 bg-stone-400 text-white rounded-lg shadow-md hover:bg-stone-700 transition duration-300">
                            Add Task
                        </button>
                        <button onClick={handleRemoveProject} className={`px-6 py-2 rounded-lg shadow-md transition duration-300 ${classes.deleteButton}`}>
                            Remove Project
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
