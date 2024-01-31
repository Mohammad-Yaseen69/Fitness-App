import { Outlet } from "react-router-dom"
import { Navbar ,Footer} from "./components"

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar /> 
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App