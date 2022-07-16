import React from "react";
import { NavLink as Link, Routes, Route } from "react-router-dom";

// import child components
import { Counter } from "../counter";
import { Post } from "../post";

// export entry application component
export const App = () => {
  console.log("App()");

  return (
    <div className="ui-app">
      {/* navigation */}
      <div className="ui-app__navigation">
        <Link
          className={({ isActive }) =>
            "nav-ui-app__navigation__link" +
            (isActive ? " ui-app__navigation__link--active" : "")
          }
          to="/"
          end
        >
          Counter
        </Link>

        <Link
          className={({ isActive }) =>
            "ui-app__navigation__link" +
            (isActive ? " ui-app__navigation__link--active" : "")
          }
          to="/post"
          end
        >
          Post
        </Link>
      </div>

      <Routes>
        <Route path="/" end element={<Counter name="Monica Geller" />} />
        <Route path="/post" end element={<Post />} />
      </Routes>
    </div>
  );
};
