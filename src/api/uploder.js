import axios from 'axios';

export const imageUploader = async (file) => {
  const url = process.env.REACT_APP_CLOUDINARY_URL;
  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);

  const res = await axios.post(url, formData);
  return res.data;
}
  