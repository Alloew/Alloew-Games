import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style.css";

export default function Main(props) {
  const home = (
    <>
      Welcome home
    </>
  )

  const library = (
    <>
      Welcome to the library
    </>
  )

  const store = (
    <>
      Welcome to the store
    </>
  )

  const friends = (
    <>
      Welcome to your friends (You have 0)
    </>
  )

  const settings = (
    <>
      Welcome to settings
    </>
  )

  const doesNotExist = (
    <>
      This page doesn't exist...
    </>
  )

  return(
    <Router>
      <Routes>
        <Route path="*" element={doesNotExist}></Route>
        <Route path="/" element={home}></Route>
        <Route path="/library" element={library}></Route>
        <Route path="/store" element={store}></Route>
        <Route path="/friends" element={friends}></Route>
        <Route path="/settings" element={settings}></Route>
      </Routes>
    </Router>
  )
}