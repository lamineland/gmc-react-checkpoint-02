import { render, screen } from "@testing-library/react";
import App from "./App";
import players from "./players";

test("renders the FIFA player cards heading", () => {
  render(<App />);
  expect(screen.getByText(/fifa player cards/i)).toBeInTheDocument();
});

test("renders a card for every player in players.js", () => {
  render(<App />);
  players.forEach((player) => {
    expect(screen.getByText(player.name)).toBeInTheDocument();
    const image = screen.getByAltText(player.name);
    expect(image).toHaveAttribute("src", player.img);
  });
});
