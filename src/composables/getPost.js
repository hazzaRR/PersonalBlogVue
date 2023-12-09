import { BASE_URL } from "../config";

export const getPost = async (id) => {

    const response = await fetch(`${BASE_URL}/api/posts/postId/${id}`, {
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