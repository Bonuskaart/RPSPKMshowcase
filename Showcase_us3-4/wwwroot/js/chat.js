"use strict";

var connection = new signalR.HubConnectionBuilder().withUrl("/BattleHubApi").build();

//Disable the send button until connection is established.
document.getElementById("sendButton").disabled = true;

connection.on("SendMessage", function (user, message) {
    var li = document.createElement("li");
    document.getElementById("messagesList").appendChild(li);
    // We can assign user-supplied strings to an element's textContent because it
    // is not interpreted as markup. If you're assigning in any other way, you 
    // should be aware of possible script injection concerns.
    li.textContent = `${user} : ${message}`;
});

//connection.on("SendChoice", function (Winner) {
//    var li = document.createElement("list");
//    document.getElementById("winnerList").appendChild(list);
//    // We can assign user-supplied strings to an element's textContent because it
//    // is not interpreted as markup. If you're assigning in any other way, you 
//    // should be aware of possible script injection concerns.
//    li.textContent = winner;
//    alert(winner);
//});

connection.start().then(function () {
    document.getElementById("sendButton").disabled = false;
}).catch(function (err) {
    return console.error(err.toString());
});

document.getElementById("sendButton").addEventListener("click", function (event) {
    event.preventDefault();

    var user = document.getElementById("userInput").value;
    var message = document.getElementById("messageInput").value;
    connection.invoke("SendMessage", user, message).catch(function (err) {
        return console.error(err.toString());
    });
});

//document.getElementById("card-1").addEventListener("click", function (event) {
//    event.preventDefault();

//    var user = document.getElementById("card-1").value;
//    connection.invoke("SendChoice", user).catch(function (err) {
//        return console.error(err.toString());
//    });
//});
//document.getElementById("card-2").addEventListener("click", function (event) {
//    event.preventDefault();

//    var user = document.getElementById("card-2").value;
//    connection.invoke("SendChoice", user).catch(function (err) {
//        return console.error(err.toString());
//    });
//});
//document.getElementById("card-3").addEventListener("click", function (event) {
//    event.preventDefault();

//    var user = document.getElementById("card-3").value;
//    connection.invoke("SendChoice", user).catch(function (err) {
//        return console.error(err.toString());
//    });
//});