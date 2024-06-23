import Footer from "@/components/footer"
import NavBar from "@/components/navbar"

const Layout: React.FC = ({children}) => {
  return (
    <html>
      <body>
      <NavBar/> 
      {children}
      <Footer/>
      </body>
    </html>
  )
}

export default Layout