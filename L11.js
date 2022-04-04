
function search () {
    var site = 'wikipedia.org'; 
    var lookfor = document.getElementById("txtlookfor").value;

    if (lookfor.length > 0) {

        var query = 'http://www.google.com/search?q=' + encodeURIComponent(lookfor) + ' site:' + site;
        var ddchoice = document.getElementById('dropdown').value; 
        
// encodeURIComponent helps to remove spacing between words, insert user's input into 'lookfor'
        if (ddchoice == 1) {
            var query = 'http://www.bing.com/search?q=' + encodeURIComponent(lookfor) + ' site:' + site;
        } 
        else {
            var query ='http://www.google.com/search?q=' + encodeURIComponent(lookfor) + ' site:' + site;
        }
// URL will change to the query's information 
        location.href = query;
        } 

// if user did not type anything, show a pop up window to remind them 
    else {
        alert('Please type the word or words for which you want to search.');
    }
} 