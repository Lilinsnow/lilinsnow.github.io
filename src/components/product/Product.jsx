import "./product.css";
import Modal from "../modal/modal";
import { useState } from "react";

const Product = ({project}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="product">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a onClick={() => setIsOpen(true)} target="_blank" rel="noreferrer">
        <img src={project.img} alt="" className="p-image" />
      </a>
      <Modal open={isOpen} onClose={() => setIsOpen (false)} title={project.title}>
        <div>
          <h3>{project.projectName}</h3>
          <hr />
          <div>
            <h4>Project Brief</h4>
            {project.brief.map(brief => <p>{brief}</p>)}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Product;