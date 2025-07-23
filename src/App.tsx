import "./App.css"
import AppRoute from "./routes"; 
import { RouterProvider } from "react-router-dom";

const App: React.FC = () => {
  return <RouterProvider router={AppRoute} />;
};

export default App;