import { Link, Outlet } from 'react-router-dom'
import Navbar from '../final/components/Navbar'

const Home = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
    //The Outlet component is a special component that is used to render the content of the current route.
  )
}
export default Home

//
