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
  const[user, setUser] = useState("");
  
  return (
    <Router history={createBrowserHistory()}>
      <Routes>
        <Route path="/" element={<Main user={user}/>} />
        <Route path="/result" element={<Result user={user}/>} />
        <Route path="/signin" element={<SignIn setUser={setUser}/>} />
        <Route path="/signup" element={<SignUp setUser={setUser}/>} />
        <Route path="/analysis" element={<Analysis user={user}/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
