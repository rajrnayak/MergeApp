import { useRef } from "react";
import Modal from "../../components/Modal.jsx";

function Index() {
    let ref = useRef(null);

    const clickHandler = () => {
        ref.current.show();
    };

    const submit = () => {
        console.log("submitted");
    };

    return (
        <>
            <h1>Im Teacher index page.</h1>
            <button
                id="open_modal"
                className="btn btn-outline-primary"
                onClick={clickHandler}
            >
                Teacher Modal
            </button>

            <Modal
                title="Teacher Modal"
                submit_button={<SubmitButton />}
                ref={ref}
            >
                Modal Body
            </Modal>
            <br />
            <br />
        </>
    );

    function SubmitButton() {
        return (
            <>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={submit}
                >
                    Submit
                </button>
            </>
        );
    }
}
export default Index;
