import '../components/card-tile.js';
//import "../js/signalr/dist/browser/signalr.js";
//import "../js/chat.js";

const element = document.createElement('steenpapierschaar-app');
document.body.appendChild(element);
//const connection = new signalR.HubConnectionBuilder()
//    .withUrl("../../Data/BattleHubApi.cs")
//    .build();

//connection.invoke("JoinLobby", "Lobby1").catch(err => console.error(err));
class App extends HTMLElement {
    shadowRoot;

    playerChoice = null;
    computerChoice = null;
    tegenspelerChoice = null;

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
        this.shadowRoot.appendChild(linkElem);
    }

    cardClickedHandler(event) {
        console.log(event);
        console.log(event.detail);

        let self = this;
        const rnd = generateRandomNumber(1, 3);
        this.computerChoice = rnd.toString() + rnd.toString() + rnd.toString();
        console.log(this.computerChoice);
        this.playerChoice = event.detail.image;
   

            if (this.computerChoice !== this.playerChoice) {
                this.shadowRoot.getElementById(`card-${this.computerChoice}`).toggleSelected();

            }
        setTimeout(() => {
            let scorePlayer1 = 0;
            let scorePlayer2 = 0;
            let levens = 3;

                if (self.playerChoice === self.computerChoice) {

                    alert('gelijkspel. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
                    console.log("score: " + scorePlayer1 + " Tegen " + scorePlayer2);

                } else if (self.playerChoice === '111' && self.computerChoice === '222') {

                    alert('computer wint. ' + `speler: Attack vs computer: Defend`);
                    scorePlayer2 = scorePlayer2 + 1;
                    console.log("score: " + scorePlayer1 + " Tegen " + scorePlayer2);
                } else if (self.playerChoice === '222' && self.computerChoice === '333') {
                    alert('computer wint. ' + `speler: Defend vs computer: Flank`);
                    scorePlayer2 = scorePlayer2 + 1;
                    console.log("score: " + scorePlayer1 + " Tegen " + scorePlayer2);
                } else if (self.playerChoice === '333' && self.computerChoice === '111') {
                    alert('computer wint. ' + `speler: Flank vs computer: Attack`);
                    scorePlayer2 = scorePlayer2 + 1;
                    console.log("score: " + scorePlayer1 + " Tegen " + scorePlayer2);
                } else {
                    alert('Je hebt gewonnen, gefeliciteerd!! ');
                    scorePlayer1 = scorePlayer1 + 1;
                    console.log("score: " + scorePlayer1 + " Tegen " + scorePlayer2);
                }

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
