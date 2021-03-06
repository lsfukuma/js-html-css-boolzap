//cambio icona quando clicco dentro l'input per inviare il messaggio
$('.send-msg').focus(function(){
    //toggle entre le due classi di icona microfono e airplane
    $('.footer .footer-icons i').toggleClass('fa-microphone fa-paper-plane');
});

$('.send-msg').blur(function(){
    $('.footer .footer-icons i').toggleClass('fa-paper-plane fa-microphone');
});

//invio messagio cliccando enter
$('.send-msg').keypress(function(){
    if (event.which == 13) {
        sendMessage()
    }
});

//invio messaggio cliccando sull'icona
$('.footer .footer-icons i').click(function(){
    sendMessage();
});

//Milestone 2
//2.2 Ricerca utenti: ​scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
$('#search input').keyup(function(){
    //recupero il testo scritto dall'utente, salvando in una variabile
    var searchUser = $('#search input').val().trim().toLowerCase();
    console.log(searchUser);
    //se l'utento ha inserito un testo
    if (searchUser !== '') {
    //vedo se il testo scritto dall'utente è presente in alcun messaggio
        $('.messages .chat-preview .name').each(function(){
            var nameMessage = $(this).text().toLowerCase(); ///text() vuoto legge solo la stringa
            if (nameMessage.includes(searchUser)) {
                $(this).parent().show();
            } else {
                $(this).parent().hide();
            }
        });
    } else {
        //resetto la lista
        $('.chat-preview').show();
        $('#search input').val('');
    }
});

// Milestone 3
// Click sul contatto​ mostra la conversazione del contatto cliccato, è possibile inserire nuovi messaggi per ogni conversazione
//intercetto il Click
$('.messages .chat-preview').click(function(){
    //tolgo la classe active di tutti i div
    $('.chat-with.real').removeClass('active');
    //rimuovo lo sfondo grigio di tutti i contatti
    $('.messages .chat-preview').removeClass('on');
    //prendo l'indice dell'item su cui ho cliccato
    var chatIndex = $(this).index();
    console.log(chatIndex);
    //recupero il div in posizione corrispondente
    $('.chat-with.real').eq(chatIndex).addClass('active');
    //aggiungo lo sfondo grigio al contatto attivo
    $(this).addClass('on');

    //per cambiare il nome del contatto cliccato
    var nameContact = $(this).find('.name').text();
    console.log(nameContact);
    // devo inserire il nome nel posto giusto
    $('#user-name').text(nameContact);

    //per cambiare la foto del contatto su cui ho cliccato
    var photoContact = $(this).find('.contact-img').attr('src');
    console.log(photoContact);
    //inserire la foto del contatto cliccato nella parte superiore destra (chat attiva)
    $('.photo-chat').attr('src' , photoContact);
});

// Cancella messaggio: ​cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

//intercetto il Click e faccio aprire il menu a tendina -- in tutte i due tipi di msg (inviati e ricevuti)
$('.chat-with').on('click', '.fa-chevron-down', function(){
    var navTemplate = $('.template .chat-with .message-options-panel').clone();
    navTemplate.toggleClass('active');
    $('.chat-with.real.active ').append(navTemplate);
});


$('.singlemsg.active').on('click', '.message-options-panel.active' , function(){
    $('.message-options-panel.active').removeClass('active');

});

//cancello il msg (quelle che ho inviata)
$('.chat-with').on('click', '.message-destroy',  function(){
    $(this).parent().siblings('.chat-me').text('Questo messaggio è stato eliminato');
    var navTemplate = $('.template .chat-with.active .message-options-panel').clone();
    navTemplate.removeClass('active');
});

// //cancello il msg ricevuto
// $('.chat-with').on('click', '.message-destroy',  function(){
//     $(this).parent().siblings('.chat-friend').text('Questo messaggio è stato eliminato');
//     var navTemplate = $('.template .chat-with .message-options-panel').clone();
//     navTemplate.removeClass('active');
// });

//funzione per inviare il msg dentro la chat.
function sendMessage (){
    var msgUser = $('.send-msg').val();
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
        $('.chat-with.real.active').append(msgTemplate)
    }
    //reinizializzo l'input
    $('.send-msg').val('');

    //milestone 2.1 -- dopo che l'utente ha inviato un messaggio: il pc invia una risposta dopo 1 secondo
    setTimeout(function(){
        //messaggio del pc
        var answerPc = 'ok';
        $('.template .chat-with .chat-friend p:first-child').text(answerPc);
        //per l'orario corrente
        $('.template .chat-with .chat-friend p:last-child').text(time);
        //clono l'elemento dal template
        var pcTemplate = $('.template .chat-with .chat-friend').clone();
        //appendo il msg dal pc
        $('.chat-with.real.active ').append(pcTemplate);
        console.log(answerPc);
    }, 1000);
}

//Handlebars invio di messaggio
var templateHtml = $('#send-msg').html();

var templateFunction = Handlebars.compile(templateHtml);

var sendMsg = {

}

var finalHtml = templateFunction(sendMsg);

$('.chat-with.real.active ').append(finalHtml);
