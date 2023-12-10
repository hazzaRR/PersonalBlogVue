import { BASE_URL } from "../config";
import { useAuthStore } from '../../stores/auth';



const auth = useAuthStore();


export const getPostByAuthor = async (id) => {

    const response = await fetch(`${BASE_URL}/api/posts/author-posts/${auth.username}`, {
        method: "GET",
    });

    if (response.status === 200) {

        const data = await response.json();
        
        return data;
    }

    else if (response.status === 404) {

        return 404;
    }

    else {
        return null;
    }


  }