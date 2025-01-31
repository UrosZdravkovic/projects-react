import { useSelector } from "react-redux";
import "./NoProjects.css";

export default function NoProjects() {
    const projects = useSelector((state) => state.projects.projects);

    return (
        <div className="no-projects-container">
            {projects.length > 0 ? (
                <h1>You currently have {projects.length} active projects</h1>
            ) : (
                <div className="no-projects-message">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/4076/4076432.png" 
                        alt="No projects"
                        className="no-projects-image"
                    />
                    <h2>No Active Projects</h2>
                    <p>Start by creating a new project to manage your tasks efficiently.</p>
                </div>
            )}
        </div>
    );
}