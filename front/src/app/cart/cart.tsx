import styles from "./cart.module.css"

const Cart: React.FC = () => {
    return (
      <div className={styles.cart}>
        <div className={styles.cartItems}>
          {/* Detalles de los productos en el carrito */}
          <div className={styles.productDetails}>
            <div className={styles.product}>
              <img src="/images/product-1.jpg" alt="Product Image" />
              <div className={styles.productInfo}>
                <h2>Nombre del Producto</h2>
                <p>Color: Azul</p>
              </div>
              <div className={styles.productPrice}>
                <p>$99.99</p>
              </div>
            </div>
            {/* Más productos */}
          </div>
  
          {/* Resumen del carrito */}
          <div className={styles.cartSummary}>
            <h3>Resumen del Carrito</h3>
            <div className={styles.summaryDetails}>
              <div>
                <span>Subtotal</span>
                <span>$99.99</span>
              </div>
              <div>
                <span>Envío</span>
                <span>Gratis</span>
              </div>
              <div className={styles.total}>
                <span>Total</span>
                <span>$99.99</span>
              </div>
            </div>
            <button className={styles.checkoutButton}>Ir a Pagar</button>
          </div>
        </div>
  
        {/* Opciones de checkout */}
        <div className={styles.checkoutOptions}>
          <h3>Opciones de Pago</h3>
          <div className={styles.paymentMethods}>
            {/* Método de pago */}
            <div className={styles.paymentMethod}>
              <input type="radio" id="creditCard" name="paymentMethod" />
              <label htmlFor="creditCard">Tarjeta de Crédito</label>
            </div>
            {/* Más métodos de pago */}
          </div>
        </div>
      </div>
    );
  };
  
export default Cart