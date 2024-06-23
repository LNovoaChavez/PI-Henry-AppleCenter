import React from "react";
import styles from "./index.module.css"

const NavBar: React.FC = () => {
    return (
      <header className={styles.navbar}>
        {/* Barra superior con texto que se mueve */}
        <div className={styles.topBar}>
            <div className={styles.discountTextContainer}>
                <div className={styles.discountText}>
                    ¡Descuentos especiales por tiempo limitado! Aprovecha nuestras ofertas.
                    </div>
            </div>
        </div>
  
        {/* Logo o nombre de la tienda */}
        <div className={styles.logo}>
          <h1>Tienda Online</h1>
        </div>
  
        {/* Barra de búsqueda y botón de inicio de sesión/registro */}
        <div className={styles.searchAndSignIn}>
          <input type="text" placeholder="Buscar..." className={styles.searchInput} />
          <button className={styles.signInButton}>Sign In / Register</button>
        </div>
  
        {/* Navegación */}
        <nav className={styles.nav}>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">FAQ's</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  };
  

  export default NavBar