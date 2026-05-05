import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import logo from "../images/Mesa de trabajo 3.png";

interface Props {
  onSearch: (value: string) => void;
}

export const Navbar = ({ onSearch }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [search, setSearch] = useState("");

  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);

  const handleSearch = (value: string) => {
    setSearch(value);
    onSearch(value);
  };


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;  

      //cerrar menú
      if(menuRef.current && !menuRef.current.contains(target)) {
        setOpenMenu(false);
      }

      //cerrar búsqueda
      if(searchRef.current && !searchRef.current.contains(target)) {
        setOpenSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setOpenMenu(false);
  }, [location]);

  return (
    <nav style={styles.nav}>
      {/* IZQUIERDA → LOGO */}
      <Link to="/" style={styles.logo}>
        <img src={logo} alt="MUUA" style={styles.logoImg} />
      </Link>

      {/* DERECHA */}
      <div style={styles.right}>
        {/* INPUT INLINE */}
        <div ref={searchRef} style={styles.searchBox}>
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
        </div>

        {/* MENÚ */}
        <div ref={menuRef}>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          style={styles.iconBtn}
        >
          <Menu size={22} />
        </button>

        {openMenu && (
          <div style={styles.menu}>
            <Link 
            to="/login" 
            style={styles.menuItem} 
            onClick={() => setOpenMenu(false)}>
              Login
            </Link>
          </div>
        )}
        </div>
      </div>
    </nav>
  );
};

const styles: any = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px",
    background: "#33691E",
    backdropFilter: "blur(12px)",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
    color: "#fff",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },

  logoImg: {
    height: "100%",
    maxHeight: "200px",
    width: "auto",
    objectFit: "contain",
    display: "block",
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
    border: "1px solid #33691E",
    background: "#33691E",
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
    background: "#33691E",
    borderRadius: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: "0 8px 20px #214E18",
  },

  menuItem: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
  },

  searchBox: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
  }
};