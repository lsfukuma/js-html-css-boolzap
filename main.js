//cambio icona quando clicco dentro l'input per inviare il messaggio

$('#send-msg').focus(function(){
    //cambio l'icona presente -- il microfono
    $('.footer #footer-icons i').removeClass('fa-microphone');
    //faccio apparire l'altra icona
    $('.footer #footer-icons i').addClass('fa-paper-plane');
});

$('#send-msg').blur(function(){
    //cambio l'icona presente -- il microfono
    $('.footer #footer-icons i').removeClass('fa-paper-plane');
    //faccio apparire l'altra icona
    $('.footer #footer-icons i').addClass('fa-microphone');
});

// Milestone 1.2
//Aggiunta di un messaggio​: l’utente scrive un testo nella parte bassa e cliccando “invia” il testo viene aggiunto al thread sopra, come messaggio verde

$('.footer #footer-icons i').click(function(){
    // debugger;
    //intercetto il messaggio dell'utente
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
        //
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

});


//Milestone 2
//2.1 Risposta dall’interlocutore: ​ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
//2.2 Ricerca utenti: ​scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
