// import { HeaderLeft, HeaderRight, FooterLeft, FooterRight } from "../Home.jsx";
function Card({ ...card }) {
    return (
        <>
            <div className="card border-dark mb-3">
                <div className="card-header bg-transparent border-dark">
                    <div className="d-flex justify-content-between align-items-center">
                        {/* <HeaderLeft /> */}
                        {/* <HeaderRight /> */}
                        {card.header_left}
                        {card.header_right}
                    </div>
                </div>
                <div className="card-body">{card.children}</div>
                <div className="card-footer bg-transparent border-dark">
                    <div className="footer d-flex justify-content-between">
                        {/* <FooterLeft />
                        <FooterRight /> */}
                        {card.footer_left}
                        {card.footer_right}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
