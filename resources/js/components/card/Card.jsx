function Card({ ...card }) {
    return (
        <>
            <div className="card border-dark">
                {(card.header_left || card.header_right) && (
                    <div className="card-header bg-transparent border-dark">
                        <div className="d-flex justify-content-between">
                            <div className="left d-flex align-items-center">
                                {card.header_left}
                            </div>
                            <div className="right d-flex align-items-center">
                                {card.header_right}
                            </div>
                        </div>
                    </div>
                )}
                <div className="card-body">{card.children}</div>
                {(card.footer_left || card.footer_right) && (
                    <div className="card-footer bg-transparent border-dark">
                        <div className="footer d-flex justify-content-between">
                            <div className="left d-flex align-items-center">
                                {card.footer_left}
                            </div>
                            <div className="right d-flex align-items-center">
                                {card.footer_right}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Card;
