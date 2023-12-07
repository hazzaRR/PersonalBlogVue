import { BASE_URL } from "../config";

export const getPost = async (id) => {


    const response = await fetch(`${BASE_URL}/api/post/postId/${id}`, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
        }
    });

    const data = await response.json();

    if (response.status === 200) {
        
        return data;
    }

    else {
        return;
    }


  }