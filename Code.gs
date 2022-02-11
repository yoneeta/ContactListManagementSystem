/*Last Update on 07-feb-2022*/

var sucessfullNewContactNote="You are now a part of ENCU mailing List you can change or remove you email any time you want . for more information about this system please contact yoneeta02@gmail.com \n\n [THIS IS AN AUTOMATED MESSAGE - PLEASE DO NOT REPLY DIRECTLY TO THIS EMAIL] ";


var sucessfullEditContactNote="you have made an update to your contact list on ENCU mailing list if you are not update please visit your contact and report the situation to ENCU IMO . contact yoneeta02@gmail.com \n\n [THIS IS AN AUTOMATED MESSAGE - PLEASE DO NOT REPLY DIRECTLY TO THIS EMAIL]";

var myConfigurationSheet='https://docs.google.com/spreadsheets/d/1LjUAGVAXCSQByKHXBq1duCEtawYm4NjrAJAmsRPCLbs/edit';

var myHeadNote="THE TEST PROGRAM &copy; 2021- &#128231; yoneeta02@gmail.com Yonatan Girma &#128241; +251-913-387-812";

//----------- Variable Declaration End Here




 function doGet(event)
{ //this is the main function to load the library content
       if(event.parameter.name)
          {//verification URL Called
               return ContactListLibrary.validateUserAndPassForRegistration(event,MailApp,ContactsApp,myConfigurationSheet,sucessfullNewContactNote,sucessfullEditContactNote);
            }
        else
          {//Load the Page
            return onopen();
            }

}

//function 1
function onopen() 
{ //return the main Content
  return ContactListLibrary.doGet();
}

//function 2
function CBgetmyvalue()
{//used to load your organization list
  
  return ContactListLibrary.getYourList(myConfigurationSheet);//pass user variable
}

//function 3
function CBgetAllMyGroup()
{//used to load user define labels
    return ContactListLibrary.getLabelasMyGroup(ContactsApp,myConfigurationSheet);
}

//function 4
function CBcreatefromArray(z,w)
{//The main registration function
   return ContactListLibrary.createfromArray(z,w,MailApp,ContactsApp,myConfigurationSheet,sucessfullNewContactNote,sucessfullEditContactNote);
}

//function 5
function CBsearchThisEmail(thisuseremail)
{//for edit contact
   return ContactListLibrary.searchThisEmail(thisuseremail);
}


//function 6
function CBsendpinForDelete(emailforpin)
{//pin sender for delete
    return ContactListLibrary.sendpinForDelete(ContactsApp,MailApp,emailforpin);
}


//function 7
function CBdeleteUserForever(myemailtodelete,codefordeleted)
{//this is deleting your contacts
      return ContactListLibrary.deleteUserForever(ContactsApp,myemailtodelete,codefordeleted);
}

//function 8
function CBbeforeVaridation(userValueArray)
{//email verification sender
    ContactListLibrary.beforeVaridation(userValueArray,ScriptApp,MailApp);
}

//function 9
function CBgetmyNote() 
{ //display on the top of the  page
 return myHeadNote;
}
