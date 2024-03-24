import '../components/card-tile.js';

const element = document.createElement('steenpapierschaar-app');
document.body.appendChild(element);
const connection = new signalR.HubConnectionBuilder()
    .withUrl("../../Data/BattleHubApi.cs")
    .build();

connection.invoke("JoinLobby", "Lobby1").catch(err => console.error(err));
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
        this.shadowRoot.appendChild(linkElem);
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
            if (self.playerChoice === self.computerChoice) {
                alert('gelijkspel. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
            } else if (self.playerChoice === '1' && self.computerChoice === '2') {
                alert('computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
            } else if (self.playerChoice === '2' && self.computerChoice === '3') {
                alert('computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
            } else if (self.playerChoice === '3' && self.computerChoice === '1') {
                alert('computer wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
            } else {
                alert('speler wint. ' + `speler: ${self.playerChoice} vs computer: ${self.computerChoice}`);
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
