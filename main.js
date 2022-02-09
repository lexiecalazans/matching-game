import "./src/styles/settings/colors.css";
import "./src/styles/elements/base.css";
import "./src/styles/generic/reset.css";
import PlayerName from "./src/components/PlayerName";
import BoardGame from "./src/objects";

const root = document.querySelector("#root");
const htmlBoardGame = BoardGame(6);
const htmlPlayerName = PlayerName();

root.insertAdjacentHTML("beforeend", htmlPlayerName + htmlBoardGame);
