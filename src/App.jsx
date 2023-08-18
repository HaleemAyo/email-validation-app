import { BrowserRouter, Route, Routes } from "react-router-dom";

import Form from "./components/Form";
import Message from "./components/Message";
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState(""); //Using React to control the input field

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form setEmail={setEmail} email={email}/>} />
        <Route path="/about" element={<Message email={email}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
