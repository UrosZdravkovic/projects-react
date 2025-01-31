import React from 'react';
import { useDispatch } from 'react-redux';
import { projectsActions } from '../store/projectList-slice';
import './AddTaskModal.css'; // Import the CSS file

export default function AddTaskModal({ closeModal, handleSubmitTask }) {
    const dispatch = useDispatch();

    function handleSubmitTask(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData.entries());
        console.log(formValues);

        dispatch(projectsActions.addTasks({
            title: formValues.taskTitle,
            description: formValues.taskDescription,
            date: formValues.taskDate,
        }));

        closeModal();
    }

    return (
        <dialog className="dialog" open>
            <div className="modal-content">
                <h3 className="modal-header">Add Task</h3>
                <form className="space-y-4" onSubmit={handleSubmitTask} method="dialog">
                    {/* Task name input */}
                    <div className="input-group">
                        <label htmlFor="taskName" className="input-group label">
                            Task Name
                        </label>
                        <input
                            type="text"
                            name="taskTitle"
                            id="taskName"
                            className="input-group input"
                            placeholder="Enter task name"
                            required
                        />
                    </div>

                    {/* Task description input */}
                    <div className="input-group">
                        <label htmlFor="taskDescription" className="input-group label">
                            Task Description
                        </label>
                        <textarea
                            id="taskDescription"
                            name="taskDescription"
                            rows="3"
                            className="input-group textarea"
                            placeholder="Enter task description"
                            required
                        />
                    </div>

                    {/* Task due date input */}
                    <div className="input-group">
                        <label htmlFor="taskDueDate" className="input-group-label">
                            Due Date
                        </label>
                        <input
                            type="date"
                            name="taskDate"
                            id="taskDueDate"
                            className="input-group-input full-clickable"
                            required
                        />
                    </div>

                    {/* Buttons */}
                    <div className="button-group">
                        <button
                            className="button-group button cancel"
                            onClick={closeModal}
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="button-group button save"
                        >
                            Save Task
                        </button>
                    </div>
                </form>
            </div>
        </dialog>
    );
}