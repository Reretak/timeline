import axios from "axios";
import { useNavigate } from '@tanstack/react-router'
import { useState } from 'react'

function Admin(){ 
    return(
        <>
            <p>Welcome!</p>
            <Post />
        </>
    )
}
function Post(){
    const [isSuccess, setIsSuccess] = useState(false);
    async function postlogic(formData){
        const title = formData.get("title");
        const content = formData.get("content");
        try {
            const response = await axios.post(
                "https://timelineserver-production.up.railway.app/post",
                {
                    title: title,
                    content: content,   
                },
                {
                    withCredentials: true
                }
            );
            if(response.data.success){
                setIsSuccess(true)
            }
            else{
                setIsSuccess(false)
            }
            
        } catch (error) {
            console.error("Post failed", error);
        }
    }
    return(
        <>
        <h1>POST POST</h1>
        <form action={postlogic}>
            <input name="title" />
            <input name="content" />
            <button type="submit">Login</button>
        </form>
        <p>{{isSuccess}}</p>
        </>
    )
}
export default Admin;