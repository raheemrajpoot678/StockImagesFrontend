import { useState, useEffect, useRef } from "react";
import classes from "./Gallery.module.css";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { saveAs } from "file-saver";
import { Link } from "react-router-dom";
import downlaod from "../../assets/arrowSmallDown.png";
import Spiner from "../Spiner/Spiner";
import loading from "../../assets/loader.gif";
import { API_URL } from "../env";

const Gallery = () => {
  const [direct, setDirect] = useState(true);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  const elementRef = useRef(null);
  const downloadImg = url => {
    saveAs(url, "unknow.png");
  };
  function onInterSection(entries) {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchMoreImages();
    }
  }
  useEffect(() => {
    const observer = new IntersectionObserver(onInterSection, {
      rootMargin: "800px",
    });
    if (observer && elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [images]);
  async function fetchMoreImages() {
    const res = await fetch(`${API_URL}/imagesbycategory/home/${page}`);
    const data = await res.json();
    if (data.length == 0) {
      setHasMore(false);
    } else {
      setImages(prevImages => [...prevImages, ...data]);
      setPage(prevPage => prevPage + 1);
    }
  }
  return (
    <>
      <div className={`${classes.gallery}`}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 3, 1600: 4 }}
        >
          <Masonry>
            {images.map((item, i) => {
              return (
                <div key={i} className={classes.pic}>
                  <div
                    className={`${classes.mainBox}`}
                    onClick={e => {
                      if (e.target.className === "opacity-100") {
                        setDirect(false);
                      }
                    }}
                  >
                    <Link key={i} to={direct ? `/photos/${item._id}` : "/"}>
                      <img className="w-full max-h-[35rem]" src={item.imgUrl} />

                      <div className={`${classes.overlay}`}>
                        <div className="flex items-center">
                          <img
                            className="w-9 h-9 max-[750px]:w-6 max-[750px]:h-6 rounded-3xl border-2 border-stone-100/30"
                            src={item.imgUrl || loading}
                            alt="creater"
                          />
                          <p className="text-stone-100 ml-2 max-[750px]:text-[.8rem]">
                            Unknow
                          </p>
                        </div>
                        <button
                          className="w-10 h-8 max-[750px]:w-6 max-[750px]:h-5 flex items-center justify-center shadow-xl bg-stone-900/90 backdrop-blur-xl rounded-md z-30"
                          onClick={() => {
                            downloadImg(item.imgUrl);
                          }}
                        >
                          <img
                            src={downlaod}
                            className="opacity-100 w-6 h-6 max-[750px]:w-5 max-[750px]:h-4 invert-[100%]"
                          />
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          </Masonry>
        </ResponsiveMasonry>
      </div>
      {hasMore && (
        <div
          className="w-full mt-5 flex items-center justify-center"
          ref={elementRef}
        >
          <Spiner />
        </div>
      )}
    </>
  );
};

export default Gallery;
