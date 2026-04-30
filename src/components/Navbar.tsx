import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";

interface Props {
  onSearch: (value: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearch(value); // 🔥 conecta con AppRouter
  };

  return (
    <nav style={styles.nav}>
      {/* IZQUIERDA → LOGO */}
      <Link to="/" style={styles.logo}>
        MUUA
      </Link>

      {/* DERECHA */}
      <div style={styles.right}>
        {/* INPUT INLINE */}
        {openSearch && (
          <input
            autoFocus
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Buscar obras..."
            style={styles.input}
          />
        )}

        {/* ICONO BUSCAR */}
        <button
          onClick={() => setOpenSearch(!openSearch)}
          style={styles.iconBtn}
        >
          {openSearch ? <X size={20} /> : <Search size={20} />}
        </button>

        {/* MENÚ */}
        <button
          onClick={() => setOpenMenu(!openMenu)}
          style={styles.iconBtn}
        >
          <Menu size={22} />
        </button>

        {openMenu && (
          <div style={styles.menu}>
            <Link to="/login" style={styles.menuItem}>Login</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

const styles: any = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 24px",
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logo: {
    fontSize: "20px",
    fontWeight: "600",
    textDecoration: "none",
    color: "#fff",
    letterSpacing: "1px",
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    position: "relative",
  },

  input: {
    padding: "6px 12px",
    borderRadius: "8px",
    border: "1px solid #334155",
    background: "#1e293b",
    color: "#fff",
    outline: "none",
    width: "220px",
    transition: "all 0.3s ease",
  },

  iconBtn: {
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },

  menu: {
    position: "absolute",
    top: "45px",
    right: 0,
    background: "#1e293b",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  },

  menuItem: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },
};