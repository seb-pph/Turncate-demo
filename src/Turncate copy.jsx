import React, { useRef, useEffect, useState } from "react";
// import { setDimensions, shouldTurncate } from "./useDimensions"

const tags = [
    { id: 343, name: " 1 asdasd" },
    { id: 5534, name: "2 okofafsdfkokoko" },
    { id: 222, name: "3 okokokoko" },
    { id: 44421, name: "4 okokokoko" },
    { id: 121224, name: "5 okokokoko" },
    { id: 23312, name: "6 okokokoko" },
    { id: 123, name: "7 okokokoko" },
    { id: 112312323, name: "8 kokokoko" },
];

const Turn = (props) => {
    const [text, setText] = useState(false)

    const handleClick = () => {
        setText(!text)

        // text ? props.forceOpen(false) : props.forceOpen(true)
        props.onClick('')
    }
    return <span onClick={handleClick} className="turncate">{text ? 'Show less.' : '...'}</span>
}
const Tag = (props) => <span className="tag">{props.title}</span>


const Turncate = () => {
    const targetRef = useRef();
    const wraperRef = useRef();
    const [turncate, setTurncate] = useState(false);
    const [activeTags, setTags] = useState(tags.length);
    const [forceOpen, setForceOpen] = useState(false);

    // setDimensions(wraperRef, targetRef)

    const manupulate = () => {
        // reset length
        setTags(tags.length)
        targetRef.current.offsetHeight > wraperRef.current.offsetHeight ? setTurncate(true) : setTurncate(false)
    }

    const handleClick = () => {
        setTags(tags.length)
        setForceOpen(!forceOpen)

    }
    // if (targetRef.current) {
    //     setDimensions(wraperRef, targetRef)
    // }

    useEffect(() => {
        // add listener for window resize    
        if (targetRef.current) {
            // setDimensions(wraperRef, targetRef)

            manupulate()
            window.addEventListener('resize', manupulate)
        }
    }, []);

    useEffect(() => {
        console.log(targetRef.current.offsetHeight)
        if (targetRef.current.offsetHeight > wraperRef.current.offsetHeight && !forceOpen) {
            if (turncate) {
                setTags(activeTags - 1)
            }
        }
    });



    return (
        <>

            <div ref={wraperRef} className={forceOpen ? "wrapper off" : "wrapper"}>
                <div ref={targetRef} className="inner">
                    {tags.map((tag, i) => {
                        console.log('in loop', activeTags)
                        if (i < activeTags - 1) {
                            // const shouldturncate = shouldTurncate()
                            return <Tag key={tag.id} title={tag.name} />
                        }
                    })}

                    {(turncate && activeTags < tags.length) && <Turn onClick={handleClick} forceOpen={forceOpen} />}
                    {forceOpen && <Turn onClick={handleClick} />}

                </div>
            </div>
        </>
    );
};

export default Turncate;
