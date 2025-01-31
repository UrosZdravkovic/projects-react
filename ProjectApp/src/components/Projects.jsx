import NoProjects from '../components/NoProjectsMain';
import { useSelector } from 'react-redux';
import ProjectDetails from './ProjectDetails';

export default function Projects() {

    const projectSelected = useSelector(state => state.projects.currentlyActiveProject)
    

    return (
        <>
            {projectSelected != null ? <ProjectDetails /> : <NoProjects />}
        </>
        
    )
}