import {Route,Routes} from 'react-router-dom'
import IndexPage from './pages/IndexPage'
import LoginPage from './pages/LoginPage'
import Layout from './Layout'
import RegisterPage from './pages/RegisterPage'
import axios from 'axios'
import { UserContextProvider } from './UserContext'
import AccountPage from './pages/AccountPage'
import Temp from './Temp'

axios.defaults.withCredentials=true
axios.defaults.baseURL=process.env.BACKEND_URL

export default function App(){
  return (
    <Temp/>
    // <UserContextProvider>
    //   <Routes>
    //     <Route path='/' element={<Layout />}>
    //       <Route index element={<IndexPage />} />
    //       <Route path='/login' element={<LoginPage />} />
    //       <Route path='/register' element={<RegisterPage />} />
    //       <Route path='/account/:subpages?' element={<AccountPage />} />
    //     </Route>
    //   </Routes>
    // </UserContextProvider>
  )
}