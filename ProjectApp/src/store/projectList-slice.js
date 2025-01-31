import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
    name: 'list',
    initialState: {
        projects: [],
        isCreating: false,
        currentlyActiveProject: null,

    },
    reducers: {
        addProject(state, action) {
            const newProject = action.payload;
            state.projects.push({
                id: Math.random(),
                title: newProject.title,
                date: newProject.date,
                description: newProject.description,
                tasks: newProject.tasks
            })
          
                state.currentlyActiveProject = newProject.id;
            
        },

        removeProject(state, action) {
            const currentProjectId = action.payload;
        
            state.projects = state.projects.filter((project) => project.id !== currentProjectId);
            state.currentlyActiveProject = null;

            
        },

        addingStarted(state) {
            state.isCreating = !state.isCreating;
        },

        addingCancelled(state) {
            state.isCreating = !state.isCreating;
        },

        addCurrentlyActive(state, action) {
            state.currentlyActiveProject = action.payload;

        },

        addTasks(state, action) {
            const newTask = action.payload;
            const activeProject = state.projects.find(
                (project) => project.id === state.currentlyActiveProject
            );
            if (activeProject) {
                activeProject.tasks.push({
                    id: Math.random(),
                    title: newTask.title,
                    description: newTask.description,
                    date: newTask.date,
                });
            }
        },

        removeTask(state, action) {
            const taskId = action.payload; // The ID of the task to be removed.
        
            // Find the currently active project.
            const activeProjectIndex = state.projects.findIndex(
                (project) => state.currentlyActiveProject === project.id
            );
        
            // Create a copy of the active project.
            const activeProject = state.projects[activeProjectIndex];
        
            // Filter out the task with the given taskId.
            const updatedTasks = activeProject.tasks.filter((task) => task.id !== taskId);
        
            // Update the active project's tasks with the new task list.
            const updatedProject = {
                ...activeProject,
                tasks: updatedTasks,
            };
        
            // Update the state with the modified active project.
            state.projects[activeProjectIndex] = updatedProject;
        }
     


    }
});


export const projectsActions = projectsSlice.actions;

export default projectsSlice;