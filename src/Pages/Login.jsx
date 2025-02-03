import { useState } from "react";
import CardComponent from "../components/CardComponent ";
import ButtonComponent from "../components/ButtonComponent";
import GridComponent from "../components/GridComponent";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt with", email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <GridComponent>
        <CardComponent className="w-full p-8 max-w-sm shadow-lg">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <ButtonComponent className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
              Login
            </ButtonComponent>
          </form>
        </CardComponent>
      </GridComponent>
    </div>
  );
}

export default Login;
