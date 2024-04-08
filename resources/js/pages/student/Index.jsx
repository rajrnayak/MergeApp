import { useRef } from "react";
import Modal from "../../components/Modal.jsx";
function Index() {
    let ref = useRef(null);

    const clickHandler = () => {
        ref.current.show();
    };

    return (
        <>
            <h1>Im student index page.</h1>
            <button
                id="open_modal"
                className="btn btn-outline-primary"
                onClick={clickHandler}
            >
                Student Modal
            </button>
            <Modal title="Student Modal" ref={ref} />
        </>
    );
}

export default Index;
