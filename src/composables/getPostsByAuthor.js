import { BASE_URL } from "../config";
import { useAuthStore } from '../stores/auth';



export const getPostByAuthor = async (id) => {
    const auth = useAuthStore();

    const response = await fetch(`${BASE_URL}/api/posts/user-posts/${auth.username}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${auth.token}`
        }
    });

    if (response.status === 200) {

        const data = await response.json();
        
        return data;
    }

    else {
        return [];
    }


  }