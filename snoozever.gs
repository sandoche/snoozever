/*
    snoozever Google Apps Script

    Get Google Inbox snoozed emails directly to Evernote
    Fully enjoy Google Inbox User Experience without changing your evernote task management behaviour

    Made with Love in France by Sandoche (www.sandoche.com)
    Snoozer is a product of Kanbanote (www.kanbanote.com)

    www.snoozever.com
*/


function snoozever() {

  /***********************************************
  * SETTINGS
  ***********************************************/

  //Set your evernote email
  //How to find it : https://evernote.com/contact/support/kb/#!/article/23480523
  //Example:
  //var evernoteEmail = 'username.v15t5621@m.evernote.com';
  var evernoteEmail = 'username.v15t5621@m.evernote.com';

  //Set your notebook (optional), if not, it will be the default one, put @ before your notebook
  //Example :
  //var notebook = '@Tasks';
  var notebook = '';

  //Set tags (optional), put # before each tags
  //Example :
  //var tags = '#1-Now #Projects';
  var tags = '';



  /***********************************************
  * ACTION
  ***********************************************/

  // Get snoozed threads
  var threads = GmailApp.search('label:snoozed');


  // Loop of snoozed threads
  for(i in threads){
    // Get last message of threads
     var message = threads[i].getMessages()[threads[i].getMessageCount()-1];

    //Forward first message to evernote
    message.forward(evernoteEmail, {
      subject: 'To do from inbox - '+message.getSubject()+' '+tags+' '+notebook
    });

    // Mark thread as done
     GmailApp.moveThreadToArchive(threads[i]);
  }

}
