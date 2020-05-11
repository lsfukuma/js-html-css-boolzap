// Milestone 1.2
//Aggiunta di un messaggio​: l’utente scrive un testo nella parte bassa e cliccando “invia” il testo viene aggiunto al thread sopra, come messaggio verde

$('.fas.fa-microphone').click(function(){
    //intercetto il messaggio dell'utente
    var msgUser = $('#send-msg').val();
    console.log(msgUser);
    //copio l'elemento template
    var msgTemplate = $('.template .chat-with .chat-me').clone();
    console.log(msgTemplate);
    //aggiungo il testo dell'utente
    msgTemplate.text(msgUser);
    //aggiungere la chat
    $('.chat-with').append(msgTemplate)
});
