import { BASE_URL } from "../config";
import { useAuthStore } from '../stores/auth';



export const deletePost = async (id) => {
    const auth = useAuthStore();

    const response = await fetch(`${BASE_URL}/api/posts/postId/${id}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${auth.token}`
        }
    });


    if (response.status === 200) {

        console.log("posted successfully deleted");
    }

    else if (response.status === 401) {
        console.log(await response.text());
      }

    else {
    }


  }