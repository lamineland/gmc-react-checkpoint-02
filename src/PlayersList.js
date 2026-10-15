// PlayersList.js
// Maps through the players array and renders one Player card per entry.
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Player from "./Player";
import players from "./players";

function PlayersList() {
    return (
        <Container className="py-5">
            <h1 style={{ color: "#d4af37", fontWeight: 800, letterSpacing: "1px" }}>
                ⚽ FIFA Player Cards
            </h1>
            <p style={{ color: "#94a3b8" }}>
                A squad of stars rendered with react-bootstrap cards
            </p>

            <Row className="g-4 justify-content-center mt-2">
                {players.map((player) => (
                    <Col key={player.id} xs={12} sm={6} lg={4} className="d-flex justify-content-center">
                        {/* Spread operator passes every player attribute down as a prop */}
                        <Player {...player} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PlayersList;