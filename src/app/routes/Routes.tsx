import {
  BrowserRouter,
  Route,
  Routes as Switch,
  Navigate,
} from "react-router-dom";
import { Home } from "../pages/Home/home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};
