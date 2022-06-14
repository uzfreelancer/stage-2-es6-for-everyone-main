import { createElement } from "../../helpers/domHelper";
import { showModal } from "./modal";

export function showWinnerModal(fighter) {
  // call showModal function 
  let winnerName = createElement('div','modal-body');
  winnerName.innerHTML = fighter.name + ' wins!';
  //console.log(fighter);
  showModal({title: 'Winner: ' + fighter.name, bodyElement: winnerName});
  //showModal({title: fighter.name + ' wins!'});
}
