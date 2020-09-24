import React, { useRef, useEffect, useState } from "react";
const defaultHeigt = 102;

const ComponentWithDimensions = (props) => {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [turncate, setTurncate] = useState(false);

  const reportWindowSize = () => {
    setDimensions({
      width: targetRef.current.offsetWidth,
      height: targetRef.current.offsetHeight
    });
  };

  const calulate = () => {
    const elements = document.querySelectorAll("span");
    // console.log(elements.length);
    if (defaultHeigt < targetRef.current.offsetHeight) {
      const list = [];
      !turncate && setTurncate(true);
      for (let i = 0; i < elements.length; i++) {
        let listed = elements[i];
        if (defaultHeigt < targetRef.current.offsetHeight) {
          console.log("here", elements[i]);
          elements[i].classList.add("hide");
          list.push(i);
        } else {
          // list[0].classList.remove("hide");
        }
        console.log(list);
      }
    } else {
      // setTurncate(false);
      console.log("Ok elements!");
    }
  };
  useEffect(() => {
    calulate();
    window.onresize = reportWindowSize;
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, [dimensions.height]);

  const tags = [
    "1 okokokoko",
    "2 sdfk;sdkf",
    "3 kfhkhdfkhsdkhfkds",
    "4 kdfksfd",
    "5 dfsdfsdfds",
    "6 sdfsdfsdfsdf",
    "7 fsfsdfsdf",
    "8 fsfsdfsdf",
    "9 fsfsdfsdf"
  ];

  const Tag = (props) => <span className="tag">{props.title}</span>;

  return (
    <div ref={targetRef} className="wrapper">
      {tags.map((tag, i) => (
        <Tag key={tag + i} title={tag} />
      ))}

      {turncate && <span className="turncate">.....</span>}
    </div>
  );
};

export default ComponentWithDimensions;
