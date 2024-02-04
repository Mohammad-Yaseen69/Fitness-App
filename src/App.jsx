import { Outlet } from "react-router-dom"
import { Navbar ,Footer} from "./components"

function App() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <Navbar /> 
        <Outlet />
        <Footer />
      </div>
    </>
  )
}

export default App