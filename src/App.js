import Users from "./features/user/userList";
import Dashboard from "./features/dashbord";
import { Route, Routes } from "react-router";

const App = () => (
    <div className="App">
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
        </Routes>
    </div>
);

export default App;
