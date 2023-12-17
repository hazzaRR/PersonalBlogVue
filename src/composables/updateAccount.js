import { BASE_URL } from "../config";
import { useAuthStore } from '../stores/auth';

export const updateAccount = async (userDetails, profilePicture) => {
    const formData = new FormData();

    // Append the JSON object as a blob
    const jsonBlob = new Blob([JSON.stringify(userDetails)], { type: 'application/json' });
    formData.append('userDetails', jsonBlob);




    if (profilePicture !== null) {
      formData.append('profilePicture', profilePicture)
    }

  const auth = useAuthStore();


  try {
    const response = await fetch(`${BASE_URL}/api/user/${auth.username}`, {
      method: 'PUT',
      body: formData,
      headers: {
        "Authorization": `Bearer ${auth.token}`
    }
    });

    if (response.status === 200) {

      alert("UserDetails successfully updated");

      const data = await response.json();

      if (data.profilePicture != null) {
          localStorage.setItem('profilePicture', data.profilePicture);
          auth.profilePicture = data.profilePicture;
      }
    
      return data;
    }

    else if (response.status === 401) {
      return 401;
    }

  } catch (error) {
    console.error('Error:', error);
  }



}