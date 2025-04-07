import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./page/SignIn";
import NotFound from "./page/NotFound";
import Registration from "./page/Registration";
import Home from "./page/Home";

const App = () => {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<NotFound />} /> {/* Shows 404 for unknown routes */}
      </Routes>
    </div>
  );
};

export default App;
