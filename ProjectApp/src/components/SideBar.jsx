import { useSelector, useDispatch } from 'react-redux';
import classes from '../components/SideBar.module.css'


import { projectsActions } from '../store/projectList-slice';


function SideBar() {


    const projects = useSelector(state => state.projects.projects);
    const currentlyActive = useSelector(state => state.projects.currentlyActiveProject);
    
    const dispatch = useDispatch();


    function handleAddProject() {
        dispatch(projectsActions.addingStarted());

    }


    function handleEditing(id) {
        dispatch(projectsActions.addCurrentlyActive(id))

    }






    return (
        <>
            <div className={classes.sideBar}>
                <h2> Projects List </h2>
                <ul>
                    {projects.length > 0 ? projects.map((project) =>
                        <li key={project.id} onClick={() => handleEditing(project.id)} className={`${currentlyActive === project.id ? classes.active : ''}`}
                        >

                            <h3>{project.title}</h3>

                        </li>) : <p>No projects...</p>}

                </ul>
                <button className={classes.styledButton} onClick={handleAddProject}> Add New Project</button>
            </div>
        </>
    )
}

export default SideBar;