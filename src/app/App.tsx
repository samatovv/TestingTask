import { BrowserRouter } from "react-router-dom"
import { MyRoutes } from "./router/router"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

function App() {

  return (
    <>
      <BrowserRouter>
        <MyRoutes />
        <ToastContainer autoClose={2000} toastClassName="z-[9999]"/>
      </BrowserRouter>
    </>
  )
}

export default App
