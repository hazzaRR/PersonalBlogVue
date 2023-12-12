import { BASE_URL } from "../config";

export const getCategories = async () => {

    try {
        const response = await fetch(`${BASE_URL}/api/category/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        if (response.status === 200) {
    
          const data = await response.json();
          return data;
        }
    
        else {
          return [];
        }
    
      } catch (error) {
        // Handle any errors that occur during the request
        console.error(error);
      }


  }