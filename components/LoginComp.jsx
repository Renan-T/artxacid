import { useState, useEffect } from "react"
import { useAlert } from "react-alert"

const LoginComp = () => {

    const [authFailed, setAuthFailed] = useState(false)
    const alert = useAlert()

    useEffect(() => {
        const checkAuth = async () => {
            const response = await fetch('api/auth')
            if(response.status === 401){
                setAuthFailed(true)
                alert.error("User or Password Incorrect")
            }
        }

    checkAuth()
}, [alert])

    return (
        <div className="flex flex-col items-center h-screen"
            style={{
                backgroundImage: `url(/background_artxacid.png)`
            }}>
            <h1 className="text-yellow-300 text-3xl p-10">Log Admin</h1>
            <form action="/api/auth" method="post" className="text-yellow-300 text-xl grid grid-cols-1">
                <label className="pb-2">Email</label>
                    <input type="email" name="email" placeholder="Digite seu email" className="w-80 text-black p-2"/>
                <label className="py-2">Password</label>
                    <input type="password" name="password" placeholder="Digite sua senha" className="w-80 text-black p-2"/>
                    <input type="submit" value="Login" className="pt-4" />
            </form>
            {authFailed && (
                <div className="text-red-500 text-lg font-medium py-2">
                User or Password Incorrect!
                </div>
            )}
        </div>
            
    )

        }
        
export default LoginComp
