import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//components
import RatingComponent from "./components/RatingComponent";
import ThankYouComponent from "./components/ThankYouComponent";

//Layouts
import CardLayout from "./layout/CardLayout";

const routesFromElements = createRoutesFromElements(
  <Route path="/" element={<CardLayout />}>
    <Route index element={<RatingComponent />} />
    <Route path="/ThankYouComponent/" element={<ThankYouComponent />} />
  </Route>
);
const router = createBrowserRouter(routesFromElements);

function App() {
  return (
    <div className="App flex flex-col justify-center items-center h-[100vh] bg-very-dark-blue">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
