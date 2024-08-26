import Form from "./Components/Form"

function App() {

  let userIsRegistered = false

  return (
    <div className="h-screen bg-green-400 text-black flex justify-center items-center">
      <Form isRegistered={userIsRegistered}/>
    </div>
  )
}

export default App
