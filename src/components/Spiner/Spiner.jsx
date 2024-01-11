// import loading from "../../assets/loding2.webp";
// import { BarLoader } from "react-spinners";
import classes from "./spiner.module.css";

const Spiner = () => {
  return (
    <>
      {/* <div className="w-full h-full flex items-center justify-center">
        <BarLoader color="rgba(0,0,0)" />
      </div> */}
      <div className={classes.circleLoaderContainer}>
        <div className={classes.circleLoader}></div>
      </div>
    </>
  );
};

export default Spiner;
