import { useContext, useState } from "react"
import { UserContext } from "../UserContext"
import { Navigate ,Link, useParams} from "react-router-dom"
import axios from "axios"

export default function AccountPage(){
    const {user,ready,setUser} = useContext(UserContext)
    const[redirect,setRedirect] = useState(false)
    if(redirect) {
        return <Navigate to={'/'}/>
    }
    let {subpages}= useParams();
    if(subpages===undefined)subpages='profile';

    if(!ready){
        return 'Loading..'
    }
    if(ready && !user && !redirect) {
        return <Navigate to={'/login'}/>;
    }
    async function logout(){
        await axios.post('http://localhost:4000/logout')
        setRedirect(true);
        setUser(null);
    }
    const navbarfocusing = (type=null)=>
    {
        let classnam = 'inline-flex gap-1 py-2 px-4 rounded-full  '
        if(type===subpages)classnam +=" bg-primary   text-white";
        else classnam+=" bg-gray-300 ";
        return classnam;
    } 

    return (
        <>
            <nav className="py-10 flex gap-20 max-w-4xl mx-auto ">
                <Link to={'/account'} className={navbarfocusing('profile')} element={<AccountPage/>}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                    </svg>
                    My Profile
                </Link>
                <Link to={'/account/statistics'} className={navbarfocusing('statistics')} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M2.625 6.75a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0A.75.75 0 0 1 8.25 6h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75ZM2.625 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0ZM7.5 12a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12A.75.75 0 0 1 7.5 12Zm-4.875 5.25a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875 0a.75.75 0 0 1 .75-.75h12a.75.75 0 0 1 0 1.5h-12a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                    Statistics
                </Link>
            </nav>
            {subpages==='profile' && 
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.name} ({user.email})
                    <br />
                    <button onClick={logout}  className="bg-primary text-white w-full mx-auto rounded-xl px-4 mt-4 py-1">Logout</button>
                </div>
            }
        </>
    )
}