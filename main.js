// Milestone 1.2
//Aggiunta di un messaggio​: l’utente scrive un testo nella parte bassa e cliccando “invia” il testo viene aggiunto al thread sopra, come messaggio verde

$('.fa-paper-plane').click(function(){
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
    $('#send-msg').val('');    
});

//cambio icona quando clicco dentro l'input per inviare il messaggio

$('#send-msg').click(function(){
    //nascondo l'icona presente -- il microfono
    $('.fas.fa-microphone').hide();
    //faccio apparire l'altra icona
    $('fa-paper-plane').show();
});
