import './App.css';
import AppliedJobs from './components/AppliedJobs';
import JobList from './components/JobList';
import Home from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/joblist",
    element: <JobList />,
  },
  {
    path: "/applied",
    element: <AppliedJobs />
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
