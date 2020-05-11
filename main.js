// Milestone 1.2
//Aggiunta di un messaggio​: l’utente scrive un testo nella parte bassa e cliccando “invia” il testo viene aggiunto al thread sopra, come messaggio verde

$('.fa-paper-plane').click(function(){
    // debugger;
    //intercetto il messaggio dell'utente
    var msgUser = $('#send-msg').val();
    console.log(msgUser);
    //primo stampo il messaggio dell'utente con text --che sostituisce tutto gia scritto prima
    $('.template .chat-with .chat-me p:first-child').text(msgUser);
    //copio l'elemento template
    var msgTemplate = $('.template .chat-with .chat-me').clone();
    console.log(msgTemplate);
    //aggiungere il messaggio alla chat
    $('.chat-with.real').append(msgTemplate)
});

//cambio icona quando clicco dentro l'input per inviare il messaggio

$('#send-msg').click(function(){
    //nascondo l'icona presente -- il microfono
    $('.fas.fa-microphone').hide();
    //faccio apparire l'altra icona
    $('fa-paper-plane').show();
});
