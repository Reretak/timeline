import axios from "axios";
import { redirect } from '@tanstack/react-router'

function Login(){
    function loginLogic (formData){
        const name = formData.get("name");
        const password = formData.get("password");
        const response = async () => {
            const result = await axios.post("https://timelineserver-production.up.railway.app/login",{
                name : name,
                password : password
            })
            if(result){
                redirect({
                    to: '/timeline/'
                })
            }
        }
        response();
    }
    return(
        <>
        <p>Login bla bla bla</p>
        <form action={loginLogic}>
            <input name="name" />
            <input name="password" />
            <button type="submit">Login</button>
        </form>
        </>
    )
}

export default Login;