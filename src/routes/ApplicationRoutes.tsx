import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import useAuth from "../contexts/auth/useAuth";

import Login from "../pages/Login";
import Home from "../pages/Home";
import ItemsDetails from "../pages/ItemsDetails/index.jsx";
import Purchase from "../pages/Purchase";
import Registration from "../pages/Registration";
import Header from "../components/Header";
import Cards from "../components/Cards";
import { Link } from "react-router-dom";

const NeedAuthentication = ({ Decontrol }: any) => {
  const { authenticated } = useAuth();
  return authenticated == true ? <Decontrol /> : <Login />;
};

const ApplicationRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="registration" element={<Registration />} />
          <Route
            path="home"
            element={<NeedAuthentication Decontrol={Home} />}
          />
          <Route path="itemsdetails">
            <Route
              path=":id"
              element={<NeedAuthentication Decontrol={ItemsDetails} />}
            />
          </Route>

          <Route path="purchase">
            <Route
              path=":id"
              element={<NeedAuthentication Decontrol={Purchase} />}
            />
          </Route>
          <Route
            path="confirmation"
            element={
              <NeedAuthentication
                Decontrol={<h1>Compra realizada com sucesso!</h1>}
              />
            }
          />
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default ApplicationRoutes;
