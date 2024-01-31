import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <div className="w-full">
        Navbar 
        <Outlet />
      </div>
    </>
  )
}

export default App