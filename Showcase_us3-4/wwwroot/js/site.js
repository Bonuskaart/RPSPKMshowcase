import '../components/card-tile.js';

const element = document.createElement('steenpapierschaar-app');
document.body.appendChild(element);
const connection = new signalR.HubConnectionBuilder()
    .withUrl("../../Data/BattleHubApi.cs")
    .build();

//connection.invoke("JoinLobby", "Lobby1").catch(err => console.error(err));
class App extends HTMLElement {
    shadowRoot;

    playerChoice = null;
    computerChoice = null;


    constructor() {
        super();
        this.shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
        this.applyStyle();
        this.applyEventlisteners();
    }

    render() {
        const clone = document.getElementById('app-tpl').content.cloneNode(true);
        this.shadowRoot.appendChild(clone);
    }

    applyStyle() {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'app.css');
        //this.shadowRoot.appendChild(linkElem);
    }

    cardClickedHandler(event) {
        console.log(event);
        console.log(event.detail);

        let self = this;
        const rnd = generateRandomNumber(1, 3);
        this.computerChoice = rnd.toString();
        console.log(this.computerChoice);
        this.playerChoice = event.detail.image;

            if (this.computerChoice !== this.playerChoice) {
                this.shadowRoot.getElementById(`card-${this.computerChoice}`).toggleSelected();

            }
        setTimeout(() => {
            let scorePlayer1 = 0;
            let scorePlayer2 = 0;
            let levens = 3;
           // if (scorePlayer1 < levens && scorePlayer2 < levens) {
                if (self.playerChoice === self.computerChoice) {
                    //message = 'gelijkspel. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`
                    //connection.invoke("SendBattleInfoToLobby", "Lobby1", user, message)
                    //.catch(err => console.error(err));
                    alert('gelijkspel. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
                    console.log("score: " + scorePlayer1 + " Tegen " + scorePlayer2);

                } else if (self.playerChoice === '1' && self.computerChoice === '2') {
                    //message = 'computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`
                    //   connection.invoke("SendBattleInfoToLobby", "Lobby1", user, message)
                    //.catch(err => console.error(err));
                    alert('computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
                    scorePlayer2 = scorePlayer2 + 1;
                    console.log("score: " + scorePlayer1 + " Tegen " + scorePlayer2);
                } else if (self.playerChoice === '2' && self.computerChoice === '3') {
                    alert('computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
                    scorePlayer2 = scorePlayer2 + 1;
                    console.log("score: " + scorePlayer1 + " Tegen " + scorePlayer2);
                } else if (self.playerChoice === '3' && self.computerChoice === '1') {
                    alert('computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
                    scorePlayer2 = scorePlayer2 + 1;
                    console.log("score: " + scorePlayer1 + " Tegen " + scorePlayer2);
                } else {
                    alert('speler wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
                    scorePlayer1 = scorePlayer1 + 1;
                    console.log("score: " + scorePlayer1 + " Tegen " + scorePlayer2);
                }
          //  } else if (scorePlayer1 == 3) {
            //    alert("Gefeliciteerd! je hebt gewonnen!");
            //    scorePlayer1 = 0;
            //    scorePlayer2 = 0;
            //} else {
            //    alert("Helaas... je hebt verloren");
            //    scorePlayer1 = 0;
            //    scorePlayer2 = 0;
            //}

                self.shadowRoot.querySelectorAll('card-tile').forEach(card => {
                    card.reset();

                });
            }, 2000);
       

    }

    applyEventlisteners() {
        this.addEventListener('cardClick', this.cardClickedHandler);
    }
   
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

customElements.define('steenpapierschaar-app', App);
