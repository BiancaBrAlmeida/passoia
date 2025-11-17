import "./banner.scss";
import banner from "../../assets/banner.png";

function Banner() {
  return (
    <div>
      <img className="banner" src={banner} alt="Banner" />
    </div>
  );
}
export default Banner;
