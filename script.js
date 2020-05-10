/*
Solution of assignment 4:
Expected output:
Hello vino
Good Bye John
Good Bye Jen
Good Bye Jason
Hello san
Hello saran
Hello tharun
Hello preethi
Hello vinoth
Good Bye pavi
*/

(function() {
    var names = ["vino", "John", "Jen", "Jason", "san", "saran", "tharun", "preethi", "vinoth", "pavi"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            byeSpeaker.speak(names[i]);
        } else {
            helloSpeaker.speak(names[i]);
        }
    }
})();
