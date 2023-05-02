import Header from '../components/Header';
import LoginComp from '../components/LoginComp';
import { positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";


const options = {
    timeout: 5000,
    position: positions.BOTTOM_CENTER
}


export default function Login() {
    return (
        <>
            <AlertProvider template={AlertTemplate} {...options}>
                <Header />
                <LoginComp />
            </AlertProvider>
        </>
    )
}
