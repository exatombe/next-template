import { AccountCircle, Home, ShoppingBag } from "@mui/icons-material";
import ResponsiveAppBar from "./Navbar";

export default async function Pages() {
  return (
    <>
    <ResponsiveAppBar pages={[
        {
          title: 'Acceuil',
          href: '/',
          icon: <Home />
        },
        {
          title: 'Produits',
          href: '/products',
          icon: <ShoppingBag />
        },
        {
          title: 'Users',
          href: '/users',
          icon: <AccountCircle />
        }
      ]} settings={[{
        title:"Login",
        href:"/login",
        icon:<AccountCircle/>
      }]} />
      <div className="container">
        <h1>Pages</h1>
        <p>Pages</p>
      </div>
    </>
  )
}