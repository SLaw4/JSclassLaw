# Week 12

# Updating code so input accepts decimals
So I just googled a solution and MDN had suggested putting step="0.01" into the input label on the html code. It seems to work so I just left it at that. 

# Which DOM selector and where would the code go
I did some research and thought maybe you could use document.getElementsByTagName('button') in order to select all buttons. Also possible to add some kind of onclick/eventlistener in the JavaScript code so that once the submit button is clicked it'll grab all the button tags and disable them. Stackoverflow also some suggestions of using an attribute called 'disabled'. Another solution also suggested using a forEach loop and an addEventListener to the JavaScript code. My thinking would be to write a new function that grabs the buttons and disables them, then call that function in the FORM eventlistener function. 