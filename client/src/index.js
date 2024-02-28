import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "animate.css/animate.min.css";

import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Registration from "./pages/Registration";
import AddPost from "./pages/AddPost";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" index element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
