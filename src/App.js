import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Navigator from "./routes/navigation/navigation.component";
import Signin from "./routes/signin/signin.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigator />}>
        <Route index element={<Home />} />
        <Route path="sign-in" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
