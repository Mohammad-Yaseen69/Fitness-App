import { Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { Home ,ExerciseDetail} from './components'

const router = createBrowserRouter([
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path='/' element={<Home />}/>
      <Route path='exercise/:id' element={<ExerciseDetail />}/>
    </Route>
  )
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>,
)
