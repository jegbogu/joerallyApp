import { useContext } from "react";
import userContext from "../../store/userContext";
const Dashboard = () => {
    const {user} = useContext(userContext)
    console.log(user)
    return ( 
        <div>
            <h3>Dashboard</h3>
            <h3>{user.username}</h3>
            <h3>{user.companyName}</h3>
            <h3>{user.message}</h3>
            
              

        </div>
     );
}
 
export default Dashboard;