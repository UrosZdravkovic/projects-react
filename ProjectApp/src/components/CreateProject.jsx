import { useDispatch } from "react-redux";
import { projectsActions } from "../store/projectList-slice";
import classes from "../components/CreateProject.module.css";

export default function CreateProject() {
    const dispatch = useDispatch();

    function handleCancel() {
        dispatch(projectsActions.addingCancelled());
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formValues = Object.fromEntries(formData.entries());

        dispatch(
            projectsActions.addProject({
                title: formValues.title,
                date: formValues.date,
                description: formValues.description,
                tasks: [],
            })
        );

        handleCancel();
    }

    return (
        <div className={classes.createProjectContainer}>
            <form onSubmit={handleSubmit} className={classes.createProjectForm}>
                <h2 className={classes.formHeading}>Create New Project</h2>

                {/* Project Title */}
                <div className={classes.formGroup}>
                    <label htmlFor="title" className={classes.formLabel}>
                        Project Title
                    </label>
                    <input
                        required
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter your Project Title"
                        className={classes.formInput}
                    />
                </div>

                {/* Due Date */}
                <div className={classes.formGroup}>
                    <label htmlFor="date" className={classes.formLabel}>
                        Due Date
                    </label>
                    <input
                        required
                        type="date"
                        id="date"
                        name="date"
                        className={classes.formInput}
                    />
                </div>

                {/* Description */}
                <div className={classes.formGroup}>
                    <label htmlFor="description" className={classes.formLabel}>
                        Description
                    </label>
                    <textarea
                        required
                        id="description"
                        name="description"
                        rows="4"
                        placeholder="Enter your Project description"
                        className={classes.formTextarea}
                    ></textarea>
                </div>

                {/* Buttons */}
                <div className={classes.buttonGroup}>
                    <button type="submit" className={`${classes.formButton} ${classes.submitButton}`}>
                        Submit
                    </button>
                    <button onClick={handleCancel} className={`${classes.formButton} ${classes.cancelButton}`}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
