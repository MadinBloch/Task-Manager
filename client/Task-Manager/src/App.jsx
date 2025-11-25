import Header from "../src/components/Header/Header"
import Footer from "../src/components/Footer/Footer"
import { Outlet } from "react-router";
export default function App() {
return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}