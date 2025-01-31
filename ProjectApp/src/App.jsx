import SideBar from "./components/SideBar"
import Projects from "./components/Projects";
import CreateProject from "./components/CreateProject";
import { useSelector } from "react-redux"


function App() {

  const creatingStarted = useSelector(state => state.projects.isCreating);




  return (
    <>
      <div className="flex">
        <SideBar  />
        {creatingStarted ? <CreateProject /> : <Projects />}
      </div>
    </>
  )
}

export default App
