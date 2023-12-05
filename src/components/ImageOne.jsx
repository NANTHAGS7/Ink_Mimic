import { Parallax } from "react-parallax";
import img1 from "../assets/aaron-burden-xG8IQMqMITM-unsplash.jpg";

const ImageOne = () => (
  <Parallax bgImage={img1} strength={800}>
    <div className="parallax_con">
      <span className="img1_text">Style Replication!</span>
    </div>
  </Parallax>
);

export default ImageOne;
