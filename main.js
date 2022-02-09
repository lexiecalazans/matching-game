import "./src/styles/settings/colors.css";
import "./src/styles/elements/base.css";
import "./src/styles/generic/reset.css";

import CardGame from "./src/components/CardGame";
import PlayerName from "./src/components/PlayerName";

const root = document.querySelector("#root");
const htmlCardGame = CardGame("Player 1", "Player 2");
const htmlPlayerName = PlayerName();

root.insertAdjacentHTML(
  "beforeend",
  htmlPlayerName +
    htmlCardGame +
    htmlCardGame +
    htmlCardGame +
    htmlCardGame +
    htmlCardGame +
    htmlCardGame
);
