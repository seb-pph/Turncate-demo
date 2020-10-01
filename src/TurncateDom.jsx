import React, { useRef, useEffect, useState, useCallback } from "react";
const defaultHeight = 102;


const Turn = (props) => {
    const [text, setText] = useState(false)

    const handleClick = () => {
        setText(!text)

        text ? props.forceOpen(false) : props.forceOpen(true)
        text ? props.onClick('') : props.onClick('clean')
    }


    return <span onClick={handleClick} className="turncate hide">{text ? 'Show less.' : '...'}</span>
}
let forceOpen=false
const Turncate = (props) => {

    const targetRef = useRef();
    // const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const [turncate, setTurncate] = useState(false);
    const [activeTags, setTags] = useState(tags);

    const setForceOpen = (forced) => {
        forceOpen = forced
    }
    const manupulateChildren = useCallback((action) => {
                const turncate = targetRef.current.querySelector('.turncate')
            if (action === 'clean') {
                const elements = targetRef.current.querySelectorAll(".tag.hide");
                if (elements.length === 1) {
                    elements[0].classList.remove("hide");
                    if (!forceOpen) {
                    turncate.classList.add("hide");
                    }
                }
                for (let i = 0; i < elements.length; i++) {
                    elements[i].classList.remove("hide");
                }

            } else {
                if (!forceOpen) {
                    const elements = targetRef.current.querySelectorAll(".tag");
                    for (let i = 1; i < elements.length; i++) {
                        if (defaultHeight < targetRef.current.offsetHeight) {
                            console.log('added class')
                            elements[elements.length - i].classList.add("hide");
                            turncate.classList.remove("hide");
                        }
                    }
                }
            }
        
    }, [])



    const manupulate = useCallback(() => {
        manupulateChildren('clean')
        if (defaultHeight < targetRef.current.offsetHeight) {
            manupulateChildren()
        }
    }, [turncate, manupulateChildren])


    useEffect(() => {
        // add listener for window resize   
        window.addEventListener('resize', manupulate)
    }, []);


    useEffect(() => {
        manupulate()
    }, [turncate, manupulate]);


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
        <>
            <div ref={targetRef} className="wrapper">
                {tags.map((tag, i) => (
                    <Tag key={tag + i} title={tag} />
                ))}

                <Turn onClick={manupulateChildren} forceOpen={setForceOpen} className="turncate hide" />
            </div>
        </>
    );
};

export default Turncate;
