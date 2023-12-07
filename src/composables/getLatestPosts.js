import { BASE_URL } from "../config";

export const getLatestPosts = async () => {


    const response = await fetch(`${BASE_URL}/api/posts/latest`, {
        method: "GET",
    });

    const data = await response.json();

    console.log(data)

    if (response.status === 200) {
        
        return data;
    }

    else {
        return [];
    }


  }