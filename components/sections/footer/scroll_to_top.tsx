import { Container } from "@nextui-org/react";
import { useState } from "react";
import { FiArrowUp } from "react-icons/fi";
const ScrollToTop = () => {
  const [hoverUp, setHoverUp] = useState(false);

  return (
    <Container
      alignItems='center'
      onMouseOver={() => {
        setHoverUp(true);
      }}
      onMouseLeave={() => {
        setHoverUp(false);
      }}
      onClick={() => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
      }}
      css={{
        background: hoverUp ? "$pink" : "$black",
        margin: "auto",
        cursor: "pointer",
        position: "fixed",
        right: 8,
        bottom: 5,
        transitionDuration: ".2s",
        padding: 2.5,
        justifyContent: "center",
        "@media (max-width: 1050px)": {
          display: "block",
        },
        display: "none",
        border: "4px solid $dark",
        width: 40,
        height: 40,
      }}>
      <FiArrowUp size={28} color={"#fff"} />
    </Container>
  );
};
export default ScrollToTop;
