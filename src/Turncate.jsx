/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React, {
    useRef,
    useEffect,
    useState,
    useLayoutEffect,
    useCallback
  } from "react";
  
  const tags = [
    { id: 343, name: " 1 Technology" },
    { id: 5534, name: "2 Writing & Translation" },
    { id: 222, name: "3 Design" },
    { id: 44421, name: "4 Digital Marketing" },
    { id: 121224, name: "5 Video" },
    { id: 23312, name: "6 Business" },
    { id: 123, name: "7 Music & Audio" },
    { id: 112312323, name: "8 Marketing" }
  ];
  
  const Turn = (props) => {
    const [text, setText] = useState(false);
    const handleClick = () => {
      setText(!text);
      // text ? props.forceOpen.current(false) : props.forceOpen.current(true)
      props.onClick("");
    };
  
    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events
      <span onClick={handleClick}>{text ? "Show less." : "..."}</span>
    );
  };
  const Turncate = () => {
    const targetRef = useRef();
    const wraperRef = useRef();
    const forceOpen = useRef();
    const reset = useRef();
    const [activeTags, setTags] = useState(tags.length);
    const [turncate, setTurncate] = useState(false);

  
    const setup = () => {
        setTags(tags.length)
        if (targetRef.current.offsetHeight > 74) {
            setTurncate(true)    
          }else{
            setTurncate(false)    
          }
    };
  
    const handleClick = () => {
      forceOpen.current = !forceOpen.current;
      setTags(tags.length);
      setup();
    };
  
    useEffect(() => {
      // add listener for window resize}
      reset.current=false
      if (targetRef.current) {
        window.addEventListener("resize", setup);
      }
      forceOpen.current = false;
      setTimeout(() => {
        setup();
      }, 300);
    }, []);

    useEffect(() => {
        if (targetRef.current.offsetHeight > 74&&!forceOpen.current) {
            setTags(activeTags - 1);
          }
    },[activeTags,turncate])
  
    const MyTag = React.memo(({ tag }) => {
      return (
        <span className="tag" key={tag.id}>
          {" "}
          <span>{tag.name}</span>
        </span>
      );
    });
  
    return (
      <>
        <div
          ref={wraperRef}
          className={forceOpen.current ? "wrapper off" : "wrapper"}
        >
          <div ref={targetRef} className="inner">
            {tags.slice(0, activeTags).map((tag) => {
              return <MyTag key={tag.id} tag={tag} />;
            })}
            {(turncate || forceOpen.current) && (
              <Turn onClick={handleClick} forceOpen={forceOpen.current} />
            )}
          </div>
        </div>
      </>
    );
  };
  export default Turncate;
