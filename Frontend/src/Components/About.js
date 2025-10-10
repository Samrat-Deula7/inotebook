import React, { use, useEffect } from "react";
import { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

const About = () => {
  const a = useContext(noteContext);
  useEffect(() => {
    a.update();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      This is about {a.state.name} {a.state.class}
    </div>
  );
};

export default About;
