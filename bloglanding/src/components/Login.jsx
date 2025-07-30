import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6 bg-gray-400 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      {submitted ? (
        <p className="text-green-600 text-center">
          Welcome, <span className="font-semibold">{username}</span>!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-800"
          />
          <button
            type="submit"
            className="w-full bg-gray-600 text-black py-2 rounded-md hover:bg-blue-950 transition"
          >
            Login
          </button>
        </form>
      )}
    </div>
  );
}
