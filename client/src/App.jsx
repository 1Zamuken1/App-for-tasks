import {Route, Routes} from "react-router-dom";

import TasksPage from "./pages/TasksPage";
import TaskForm from "./pages/TaskForm";
import NotFound from "./pages/NotFoundPafe";
import { TaskContextProvider } from "./context/TaskProvider";

import NavBar from "./components/NavBar";

function App(){
  return(
    <TaskContextProvider>
      <NavBar />
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/new" element={<TaskForm />} />
          <Route path="/edit/:id" element={<TaskForm/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
    </TaskContextProvider>
  );
}

export default App
