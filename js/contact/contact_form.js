function SendContcat() {
    var message_result = ""
    var name = $('#form_name').val()
    var email = $("#form_email").val()
    var subject = $("#form_subject").val()
    var body = "Nom : " + name + "<br>" + "email : " + email + "<br>" + "Sujet : " + subject + "<br>"
        + "message :" + " " + $("#form_message").val()
    Email.send({
        Host: "mail.lmcmauritanie.com",
        Username: "contact@lmcmauritanie.com",
        Password: "b.t_Cz@B.)Gt",
        To: 'contact@lmcmauritanie.com',
        From: email,
        Subject: subject,
        Body: body,
    }).then(
        (message) => {
          
            if (message == "OK") {
                $('#contact-form_js').find('.messages').html(
                    '<div id="myModal" class="modal fade">'+
                  '  <div class="modal-dialog modal-confirm">'+
                     '   <div class="modal-content">'+
                     '       <div class="modal-header flex-column">'+
                     '           <div class="icon-box">'+
                     '               <i class="material-icons">&#xE876;</i>'+
                     '           </div>						'+
                    '            <h4 class="modal-title w-100">Merci !</h4>'	+
                        '   <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>'+
                    '        </div>'+
                    '        <div class="modal-body">'+
                    '            <p>Votre message a été envoyer avec success</p>'+
                   '         </div>'+
                   '         <div class="modal-footer justify-content-center">'+
                   '             <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>'+
              
                   '         </div>'+
                  '      </div>'+
                  '  </div>'+
                '</div>' 
                
                    );


                $(".loading-icon").addClass("hide");
                $('#contact-form_js')[0].reset();
                $('#myModal').modal('show'); 


            }
            else {
               
                    $('#contact-form_js').find('.messages').html(
                    '<div class="alert alert-danger mt-2' + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + 'Votre message rencontre une panne ' + '</div>'
                );
                $(".loading-icon").addClass("hide");
                $('#contact-form_js')[0].reset()

               
            

            }
        }

    );
   
    $(".loading-icon").removeClass("hide");



    // $('#form_name, #form_email, #form_subject, #form_message').val('')



}

function SendEmail() {
    var email = $('#email').val()

    Email.send({
        Host: "mail.lmcmauritanie.com",
        Username: "contact@lmcmauritanie.com",
        Password: "b.t_Cz@B.)Gt",
        To: 'contact@lmcmauritanie.com',
        From: email,
        Subject: "subscribe",
        Body: "email : " +"<br>" +email,
    }).then(
        message => alert(message)

    );

    $('#email').val("")



}