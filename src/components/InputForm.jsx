import axios from "axios";
import React from "react";

export default function InputForm({ setIsOpen }) {
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isSignedUp, setIsSignedUp] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const endpoint = isSignedUp ? "register" : "login";
    const url = `${import.meta.env.VITE_API_URL}/auth/${endpoint}`;
    const data = isSignedUp
      ? { username, email, password }
      : { email, password };

    setLoading(true);
    try {
      const response = await axios.post(url, data);
      console.log(response.data);
      localStorage.setItem("user", JSON.stringify(response.data.data));
      localStorage.setItem("token", response.data.accessToken);
      setIsOpen();
    } catch (error) {
      // console.error("Error:", error);
      // alert("Login failed");
      error.response?.data?.error
        ? setError(error.response.data.error)
        : setError("Something went wrong");
      console.error("Error:", error.response.data.error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        <form className="form" onSubmit={handleOnSubmit}>
          {isSignedUp && (
            <div className="form-control">
              <label htmlFor="username">Name</label>
              <input
                type="text"
                id="username"
                placeholder="Enter your name"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          )}
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Processing..." : isSignedUp ? "Sign Up" : "Sign In"}
          </button>
          {error && <p className="error">{error}</p>}
          <p onClick={() => setIsSignedUp((pre) => !pre)}>
            {isSignedUp ? "Already have an account" : "Create new account"}
          </p>
        </form>
      </div>
    </>
  );
}
