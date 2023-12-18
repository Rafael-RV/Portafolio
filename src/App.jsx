import { Route, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";



const App = () => {
  return (
    <>
     <Routes>
      <Route path="/mi-portafolio-rr" element={<HomePage/>} />
     </Routes>
    </>
  )
}

export default App

