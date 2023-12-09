import { BASE_URL } from "../config";

export const getLatestPosts = async () => {


    const response = await fetch(`${BASE_URL}/api/posts/latest`, {
        method: "GET",
    });


    if (response.status === 200) {

        const data = await response.json();
        
        return data;
    }

    else {
        return [];
    }


  }