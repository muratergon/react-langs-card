import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showDesc, setShowDesc] = useState(false);
  //   console.log(lang);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-4 h-100 lang-card"
      onClick={() => setShowDesc(!showDesc)}
      type="button"
    >
      {!showDesc ? (
        <Container>
          <Image src={img} width="70%" className="lang-logo"></Image>
          <h4 className="display-6">{name}</h4>
        </Container>
      ) : (
        <ol className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="h6 text-start ">{item}</li>;
          })}
        </ol>
      )}
    </Container>
  );
};

export default Language;
