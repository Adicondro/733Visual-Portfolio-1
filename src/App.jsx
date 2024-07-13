import React from "react"
import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ErrorPage from "./pages/ErrorPage"
import Article from "./pages/Article"

export default function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" Component={Homepage}/>
        <Route path="/about" Component={About}/>
        <Route path="*" Component={ErrorPage}/>
        <Route path="/articles" Component={Article}/>
      </Routes>
      <Footer/>
    </>
  )
}