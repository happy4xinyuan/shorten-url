import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./Main";
import SignIn from "./Signin.tsx";
import SignUp from "./Signup.tsx";
import Result from "./Result";
import Analysis from "./Analysis";
import { createBrowserHistory } from "history";

import "./App.css";
import { NotFound } from "./Notfound";
import { useState } from "react";

function App() {
  return (
    <Router history={createBrowserHistory()}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/result" element={<Result />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/analysis" element={<Analysis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
