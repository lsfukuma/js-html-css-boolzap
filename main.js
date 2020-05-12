//cambio icona quando clicco dentro l'input per inviare il messaggio

$('#send-msg').focus(function(){
    //toggle entre le due classi di icona microfono e airplane
    $('.footer #footer-icons i').toggleClass('fa-microphone fa-paper-plane');
});

$('#send-msg').blur(function(){
    $('.footer #footer-icons i').toggleClass('fa-paper-plane fa-microphone');
});

// Milestone 1.2
//Aggiunta di un messaggio​: l’utente scrive un testo nella parte bassa e cliccando “invia” il testo viene aggiunto al thread sopra, come messaggio verde
//invio messagio cliccando enter
$('#send-msg').keypress(function(){
    if (event.which == 13) {
        sendMessage()
    }
});

//invio messaggio cliccando sull'icona
$('.footer #footer-icons i').click(function(){
    sendMessage();
});

//funzione per inviare il msg dentro la chat.
function sendMessage (){
    var msgUser = $('#send-msg').val();
    console.log(msgUser);
    //primo stampo il messaggio dell'utente con text -- funzione che sostituisce tutto gia scritto prima.
    $('.template .chat-with .chat-me p:first-child').text(msgUser);
    //per l'orario corrente
    var today = new Date();
    var time = today.getHours() + "." + today.getMinutes();
    console.log(time);
    $('.template .chat-with .chat-me p:last-child').text(time);
    //copio l'elemento template
    var msgTemplate = $('.template .chat-with .chat-me').clone();
    console.log(msgTemplate);
    //controllo che il messaggio non sia vuoto
    if (msgUser !== ('')) {
        //se non è vuoto, aggiungo il messaggio alla chat
        $('.chat-with.real').append(msgTemplate)
    }
    //reinizializzo l'input
    $('#send-msg').val('');

    //milestone 2.1 -- dopo che l'utente ha inviato un messaggio: il pc invia una risposta dopo 1 secondo
    setTimeout(function(){
        //messaggio del pc
        var answerPc = 'ok';
        $('.template .chat-with .chat-friend p:first-child').text(answerPc);
        //per l'orario corrente
        $('.template .chat-with .chat-friend p:last-child').text(time);
        //clono le'elemento dal template
        var pcTemplate = $('.template .chat-with .chat-friend').clone();
        //appendo il msg dal pc
        $('.chat-with.real').append(pcTemplate);
        console.log(answerPc);
    }, 1000);
}

//Milestone 2
//2.2 Ricerca utenti: ​scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
$('#search i').click(function(){
    //recupero il testo scritto dall'utente, salvando un una variabile
    var searchUser = $('#search input').val();
    console.log(searchUser);
    //vedo se il testo scritto dall'utente è presente in ogni p che ho
    $('.messages').each(function(){
        var nameMessage = $(this).text() ///text() vuoto legge solo la stringa
        if (searchUser == nameMessage) {
            $(this).siblings().show();
        } else {
            $('.messages .name').hide();

        }
    });
    // $('.messages .last-message').each(function(){
    //     var lastMessage = $(this).text() ///text() vuoto legge solo la stringa
    //     if (searchUser == lastMessage) {
    //         lastMessage.show();
    //     } else {
    //         $(this).hide();
    //     }
    // });

});
