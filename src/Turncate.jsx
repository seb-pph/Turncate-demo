import React, { useRef, useEffect, useState, useCallback } from "react";
const tags = [
  { id: 343, name: " 1 Technology & Programming" },
  { id: 5534, name: "2 Writing & Translation" },
  { id: 222, name: "3 Design" },
  { id: 44421, name: "4 Digital Marketing" },
  { id: 121224, name: "5 Video & Photo & Image" },
  { id: 23312, name: "6 okokoBusinesskoko" },
  { id: 123, name: "7 Music & Audio" },
  { id: 112312323, name: "8 Marketing, Branding & Sales" }
];

const Turn = (props) => {
  const [text, setText] = useState(false);
  const handleClick = () => {
    setText(!text);
    // text ? props.forceOpen(false) : props.forceOpen(true)
    props.onClick("");
  };

  return (
    <span onClick={handleClick} className="turncate">
      {text ? "Show less." : "..."}
    </span>
  );
};
const Turncate = (props) => {
  const targetRef = useRef();
  const wraperRef = useRef();
  const [turncate, setTurncate] = useState(false);
  const [activeTags, setTags] = useState(tags.length);
  const [forceOpen, setForceOpen] = useState(false);

  const setup = () => {
    // reset length
    setTags(tags.length);
    targetRef.current.offsetHeight > wraperRef.current.offsetHeight
      ? setTurncate(true)
      : setTurncate(false);
  };

  const handleClick = () => {
    setTags(tags.length);
    setForceOpen(!forceOpen);
  };

  useEffect(() => {
    // add listener for window resize
    if (targetRef.current) {
      setup();
      window.addEventListener("resize", setup);
    }
  }, []);

  useEffect(() => {
    console.log(targetRef.current.offsetHeight);
    if (
      targetRef.current.offsetHeight > wraperRef.current.offsetHeight &&
      !forceOpen
    ) {
      if (turncate) {
        setTags(activeTags - 1);
      }
    }
  });

  const Tag = (props) => <span className="tag">{props.title}</span>;

  return (
    <>
      <div ref={wraperRef} className={forceOpen ? "wrapper off" : "wrapper"}>
        <div ref={targetRef} className="inner">
          {tags.map((tag, i) => {
            console.log("in loop", activeTags);
            if (i + 1 <= activeTags) {
              return <Tag key={tag.id} title={tag.name} />;
            }
          })}

          {turncate && activeTags < tags.length && (
            <Turn onClick={handleClick} forceOpen={forceOpen} />
          )}
          {forceOpen && <Turn onClick={handleClick} />}
        </div>
      </div>
    </>
  );
};

export default Turncate;
