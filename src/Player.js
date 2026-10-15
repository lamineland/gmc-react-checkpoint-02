// Player.js
// A single FIFA player card. All attributes are destructured from props
// and rendered inside a react-bootstrap Card with inline styling.
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Player({
    name = "Unknown Player",
    team = "Free Agent",
    nationality = "Unknown",
    jerseyNumber = 0,
    age = 18,
    img = "https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg"
}) {
    return (
        <Card
            style={{
                width: "18rem",
                borderRadius: "18px",
                overflow: "hidden",
                border: "2px solid #d4af37",
                background: "linear-gradient(160deg, #16233b 0%, #0d1526 100%)",
                color: "#f8fafc",
                boxShadow: "0 12px 28px rgba(0, 0, 0, 0.45)"
            }}
        >
            <div style={{ position: "relative" }}>
                <Card.Img
                    variant="top"
                    src={img}
                    alt={name}
                    style={{
                        height: "260px",
                        objectFit: "cover",
                        objectPosition: "top center",
                        borderBottom: "3px solid #d4af37"
                    }}
                />
                <span
                    style={{
                        position: "absolute",
                        top: "12px",
                        right: "12px",
                        backgroundColor: "#d4af37",
                        color: "#0d1526",
                        fontWeight: 800,
                        fontSize: "1.25rem",
                        width: "48px",
                        height: "48px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)"
                    }}
                >
                    {jerseyNumber}
                </span>
            </div>

            <Card.Body style={{ padding: "1rem 1.25rem" }}>
                <Card.Title
                    style={{
                        color: "#d4af37",
                        fontWeight: 800,
                        fontSize: "1.35rem",
                        letterSpacing: "0.5px",
                        marginBottom: "0.25rem"
                    }}
                >
                    {name}
                </Card.Title>
                <Card.Text
                    style={{
                        color: "#93c5fd",
                        fontWeight: 600,
                        marginBottom: "0.75rem"
                    }}
                >
                    {team}
                </Card.Text>
            </Card.Body>

            <ListGroup variant="flush" style={{ backgroundColor: "transparent" }}>
                <ListGroup.Item
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        color: "#e2e8f0",
                        borderTop: "1px solid rgba(212, 175, 55, 0.25)",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <strong style={{ color: "#d4af37" }}>Nationality</strong>
                    <span>{nationality}</span>
                </ListGroup.Item>
                <ListGroup.Item
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        color: "#e2e8f0",
                        borderTop: "1px solid rgba(212, 175, 55, 0.25)",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <strong style={{ color: "#d4af37" }}>Age</strong>
                    <span>{age}</span>
                </ListGroup.Item>
                <ListGroup.Item
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        color: "#e2e8f0",
                        borderTop: "1px solid rgba(212, 175, 55, 0.25)",
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <strong style={{ color: "#d4af37" }}>Jersey Number</strong>
                    <span>#{jerseyNumber}</span>
                </ListGroup.Item>
            </ListGroup>
        </Card>
    );
}

// Default props for every attribute (as required by the checkpoint).
// Note: React 19 function components honor the ES6 defaults used in the
// destructuring above; this defaultProps block keeps the classic definition
// alongside it for completeness.
Player.defaultProps = {
    name: "Unknown Player",
    team: "Free Agent",
    nationality: "Unknown",
    jerseyNumber: 0,
    age: 18,
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Soccerball.svg"
};

export default Player;