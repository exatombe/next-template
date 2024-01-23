import { AccountCircle, Home, ShoppingBag } from "@mui/icons-material";
import ResponsiveAppBar from "./Navbar";
import { cookies } from 'next/headers'
import { UsersGetUser } from "./api-wrapper";

export default async function Pages() {
  let JWT_TOKEN = cookies().get('JWT_TOKEN')
  let id = cookies().get('id')
  let user = undefined;
  if(JWT_TOKEN && id){
    user = await UsersGetUser(id.value, JWT_TOKEN.value)
  }
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