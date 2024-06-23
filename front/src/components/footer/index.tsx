//styles
import styles from "./index.module.css"


const Footer = () => {
    return (
        <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          {/* Sección de enlaces */}
          <div className={styles.section}>
            <h3>Atención al Cliente</h3>
            <ul>
              <li><a href="#">Preguntas Frecuentes</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Cambios y Devoluciones</a></li>
              <li><a href="#">Términos y Condiciones</a></li>
            </ul>
          </div>
  
          {/* Sección de redes sociales */}
          <div className={styles.section}>
            <h3>Redes Sociales</h3>
            <ul className={styles.socialLinks}>
              <li><a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a></li>
              <li><a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a></li>
              <li><a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a></li>
            </ul>
          </div>
  
          {/* Sección de tarjetas */}
          <div className={styles.cardGrid}>
            <h3>Medios de Pago</h3>
            <div className={styles.cards}>
              {/* Tarjetas de medios de pago */}
              <div className={styles.card}><img src="https://w7.pngwing.com/pngs/552/832/png-transparent-visa-logo-visa-electron-credit-card-debit-card-automated-teller-machine-visa-logo-blue-text-trademark.png" alt="Visa" /></div>
              <div className={styles.card}><img src="/images/card-mastercard.png" alt="MasterCard" /></div>
              <div className={styles.card}><img src="/images/card-amex.png" alt="American Express" /></div>
              <div className={styles.card}><img src="/images/card-paypal.png" alt="PayPal" /></div>
            </div>
          </div>
        </div>
  
        {/* Derechos de autor y QR */}
        <div className={styles.footerBottom}>
          <p>© 2024 Tu Tienda Online. Todos los derechos reservados.</p>
        </div>
      </footer>
    )
}

export default Footer