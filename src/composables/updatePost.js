import { BASE_URL } from "../config";

export const updatePost = async (id, postDetails, banner_image) => {

    console.log(id);
    console.log(postDetails);
    console.log(banner_image);

    const formData = new FormData();

  // Append the JSON object as a blob
  const jsonBlob = new Blob([JSON.stringify(postDetails)], { type: 'application/json' });
  formData.append('postDetails', jsonBlob);




  if (banner_image !== null) {
    formData.append('bannerImage', banner_image)
  }


  try {
    const response = await fetch(`${BASE_URL}/api/posts/postId/${id}`, {
      method: 'PUT',
      body: formData,
    });

    if (response.status === 200) {

      alert("Post successfully updated");
    }

    console.log(response.status);

  } catch (error) {
    console.error('Error:', error);
  }



}