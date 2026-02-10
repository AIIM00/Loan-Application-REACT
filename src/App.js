import "./App.css";
import Header from "./components/Header/Header";
import Form from "./components/Form/Form";
import { UserContext } from "./contexts/UserContext";
import { Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Contact from "./Contact";

function App() {
  return (
    <>
      <UserContext.Provider
        value={{
          userName: "Ai003",
          email: "ali22ibrahim12@gmail.com",
          name: "ali",
        }}
      >
        <div className="App" style={{ marginTop: "5rem" }}>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <Link to="/">
              <button>HOME</button>
            </Link>
            <Link to="/contact">
              <button>CONTACT</button>
            </Link>
            <button>POSTS</button>
          </div>
        </div>
      </UserContext.Provider>

      {/*ROUTES*/}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Form />
            </>
          }
        />
        <Route path="/hello" element={<Hello />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
