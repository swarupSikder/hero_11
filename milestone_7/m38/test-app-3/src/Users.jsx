import { use } from "react"
import User from "./User";

export default function Users({fetchPromise}){
    const users = use(fetchPromise);


    return (
        <div className="card">
            <h2>Users</h2>

            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    )
}