import { useDispatch } from "react-redux";

import { projectsActions } from "../store/projectList-slice";

export default function Task({ title, date, description, id}) {

    const dispatch = useDispatch();
    
    const handleRemoveTask = () => {

        dispatch(projectsActions.removeTask(id))

    }

    return (
        <div className="relative bg-white shadow-lg rounded-lg p-4 border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
            {/* Close Button */}
            <button
                onClick={handleRemoveTask}
                className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
                &times;
            </button>

            {/* Title and Description */}
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Task: {title}</h2>
            <p className="text-sm text-gray-600 mb-4">Description: {description}</p>

            {/* Date at the Bottom */}
            <p className=" text-sm text-gray-500 font-medium">Due Date: {date}</p>
        </div>
    );
}