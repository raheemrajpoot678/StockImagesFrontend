import { useState, useEffect } from "react";
import axios from "axios";
import search from "../../assets/search.png";

const Uploadimage = () => {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  const submithandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", img);
    formData.append("title", title);
    axios
      .post("http://localhost:8080/api/v1/images/uploadimage", formData)
      .then((response) => {
        alert(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const getImages = () => {
      axios
        .get("http://localhost:8080/api/v1/images/getimages")
        .then((res) => setData(res.data));
    };
    getImages();
  }, []);
  console.log(data);
  return (
    <>
      <div>
        {data.map((item, i) => {
          return (
            <div key={i}>
              <h2>{item.title}</h2>
              <img src={search} alt="" />
            </div>
          );
        })}
      </div>
      <form onSubmit={submithandler}>
        <input type="text" onChange={(e) => setTitle(e.target.value)} />
        <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        <button type="submit">Upload</button>
      </form>
    </>
  );
};

export default Uploadimage;
