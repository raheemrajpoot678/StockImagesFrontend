import axios from "axios";
import { useState } from "react";

const Uploadimage = () => {
  const [img, setImg] = useState(null);
  const downloadhandler = async e => {
    e.preventDefault();
    const data = new FormData();
    data.append("file", img);
    data.append("upload_preset", "images_preset");
    try {
      const api = "https://api.cloudinary.com/v1_1/de3lslau1/image/upload";

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log(secure_url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={downloadhandler}>
        <input
          type="file"
          onChange={e => {
            setImg(e.target.files[0]);
          }}
        />
        <button type="submit">upload</button>
      </form>
    </div>
  );
};

export default Uploadimage;
