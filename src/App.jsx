
import Home from "../components/Home"
import { Button } from "@nextui-org/react"
import Log from "../components/Log"
import Register from "../components/create"
import UserPage from "../components/userPage"

function App() {
  return (
    <>
    <UserPage/>
    {/* <Register/> */}
    {/* <Log/> */}
      {/* <div style={{ backgroundImage: "url('./tor.jpg')" }} className="w-full h-full absolute">
        <div className="text-center p-10 " >
          <h1 className="font-bold font-fantasy text-4xl text-white">Wanderwise</h1>
          <h1 className="text-center text-2xl font-bold text-[#b4d330]">App</h1>
        </div>
        <div>
          <Button className="bg-[#b4d330] w-[350px] ml-7 absolute text-white mt-[650px] text-xl py-7">Let Started</Button>
        </div>
      </div> */}
    </>

  )
}

export default App
