import { BASE_URL } from "../config";

export const deletePost = async (id) => {


    const response = await fetch(`${BASE_URL}/api/posts/postId/${id}`, {
        method: "DELETE",
    });


    if (response.status === 200) {

        console.log("posted successfully deleted");
    }

    else {
    }


  }