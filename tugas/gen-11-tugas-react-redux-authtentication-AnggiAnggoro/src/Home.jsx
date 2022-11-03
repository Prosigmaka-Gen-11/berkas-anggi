import { useDispatch, useSelector } from "react-redux"
import { logout } from "./UserSlice"

export default function Home() {
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()


    return (
        <>
         <h1>Hi! {user.userData.firstName} {user.userData.lastName}</h1>
         <img src={user.userData.image}/>
         <button onClick={()=> dispatch(logout())}>Logout</button>
        </>
    )
}