import connect from "../lib/mongodb";
import User from "../model/userSchema"

export default function AdminComp () {
    return (
        <div>
            <h1>Create User</h1>
            <form action="/api/register" method="post">
                <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder="Digite seu email" />
                <label htmlFor="">Password</label>
                    <input type="password" name="password" placeholder="Digite uma senha"/>
                    <input type="submit" value="Create" />
            </form>
        </div>
    )
}