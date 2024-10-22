import { BrowserRouter, Route, Routes as Switch, Navigate } from "react-router-dom";
import { Dashboard } from "../pages";
import { Tailwind } from "../pages";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/"  element={<Dashboard />} />
        <Route path="/teste"  element={<Tailwind />} />
        
        <Route path="*"  element={<Navigate to="/"/>} />

      </Switch>
    </BrowserRouter>
  );
};