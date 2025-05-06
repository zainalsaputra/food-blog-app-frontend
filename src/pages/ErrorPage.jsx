import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error); // log error-nya (opsional)

  return (
    <div
      style={{
        padding: "2rem",
        textAlign: "center",
        backgroundColor: "#ffe0e0",
        borderRadius: "8px",
        margin: "2rem auto",
        maxWidth: "600px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h1>🚨 Oops! Something went wrong</h1>
      <p>Sorry, we couldn’t load this page properly.</p>

      {error?.statusText || error?.message ? (
        <pre
          style={{
            background: "#fff0f0",
            padding: "1rem",
            borderRadius: "5px",
            marginTop: "1rem",
          }}
        >
          {error.statusText || error.message}
        </pre>
      ) : null}

      <button
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#ff4d4f",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
        onClick={() => (window.location.href = "/")}
      >
        🔙 Go to Home
      </button>
    </div>
  );
}
