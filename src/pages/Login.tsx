import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export const Login = () => {
  const { loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handle = async () => {
    try {
      setLoading(true);
      await loginUser(email, password);
      alert("Logueado correctamente");
    } catch (e) {
      alert("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>MUUA</h2>
        <p style={styles.subtitle}>Acceso administrativo</p>

        <input
          style={styles.input}
          placeholder="Correo electrónico"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Contraseña"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handle} disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </div>
    </div>
  );
};

const styles: any = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
  },
  card: {
    width: 320,
    padding: 30,
    borderRadius: 16,
    background: "rgba(255,255,255,0.05)",
    backdropFilter: "blur(10px)",
    display: "flex",
    flexDirection: "column",
    gap: 15,
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
  },
  title: {
    margin: 0,
    textAlign: "center",
    color: "#fff",
    letterSpacing: 2,
  },
  subtitle: {
    textAlign: "center",
    color: "#aaa",
    marginBottom: 10,
  },
  input: {
    padding: 10,
    borderRadius: 8,
    border: "1px solid #333",
    background: "#0f172a",
    color: "#fff",
    outline: "none",
  },
  button: {
    padding: 10,
    borderRadius: 8,
    border: "none",
    background: "#6366f1",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};