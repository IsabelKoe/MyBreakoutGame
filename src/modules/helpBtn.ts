// import 
import { exitHelp, helpModal, helpModalContent } from "./helpers/domutils";

const isVisible = "is-visible";

// opens the modal window for help button
export function openHelpModal(){
    if(helpModal)
    helpModal.classList.add(isVisible);
    helpModalContent.innerHTML = '<h3>Aufbau & Start des Spiels</h3> \
    <p>Um das Spiel zu starten, bitte „npm run watch“ in das Terminal eingeben \
    und das Spiel mit dem Live-Server von Visual Studio Code im Browser öffnen. \
    Es erscheint die Startseite mit drei Buttons. \
    Der Spieler muss über den „Enter Name“-Button zunächst seinen Spielernamen eingeben, \
    um auf den „Start the Game“-Button klicken zu können. \
    Der Name des Spielers wird nach erfolgreicher Eingabe auf der Startseite angezeigt\
     (Hinweis: jeder Spielername kann nur ein einziges Mal existieren). \
     Über den mittleren Button gelangt der Spieler zum eigentlichen Spiel. \
     Er/Sie kann das Spiel nun über den „Play“-Button starten.</p> \
     <h3>Ziel & Ablauf des Spiels</h3\
     <p>Ziel des Breakoutgame ist es, in jedem Level so schnell wie möglich mit dem Ball\
      alle Bricks im Canvas zu treffen. Der Spieler muss dabei mit dem \
      Paddle (Spielbalken am Boden des Canvas) den Ball in der Luft halten. \
      Die Steuerung des Paddles erfolgt mit der linken und rechten Pfeiltaste der Tastatur. \
      Der Ball wird zu Beginn des Spiels automatisch gestartet und ändert bei jedem Aufprall\
       (Wand, Brick oder Paddle) die Richtung. Für jedes Mal, bei dem der Spieler einen Brick trifft, \
       wird der Score um eins nach oben gezählt. Sind alle Bricks getroffen, \
       so hat der Spieler gewonnen und kann über den Button das nächste Level starten. \
       Verliert der Spieler den Ball und fällt dieser auf den Boden des Canvas, \
       so muss das Level erneut gestartet werden.</p>\
       <h3>Levels</h3>\
       <p>Das Spiel besteht aus fünf unterschiedlichen Levels, je höher das Level, \
       desto schwieriger wird es für den Spieler. Die Schwierigkeit entsteht dadurch, \
       dass die Bricks unterschiedlich oft getroffen werden müssen, der Ball schneller \
       und das Paddle schmaler wird.</p>\
       <h4>Anmerkung:</h4> \
       <p>Das Spiel verwendet den LocalStorage des Browsers, um Highscore Informationen zu einzelnen Spielern zu speichern.</p>\
       '
}

// add EventListener to Closing Button of Modal and close modal on click
exitHelp.addEventListener("click", function () {
      if(helpModal) helpModal.classList.remove(isVisible);
  });

// add EventListener to close modal if player clicks outside of modal window
document.addEventListener("click", (e) => {
  if (e.target === document.querySelector(".modal.is-visible")) {
    helpModal.classList.remove(isVisible);
  }
});

// add EventListener to close modal if player wants to leave modal view with escape key
document.addEventListener("keyup", (e) => {
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    helpModal.classList.remove(isVisible);
  }
});
