var acceptedChars = "QWERTYUIOPASDFGHJKLZXCVBNM1234567890";

function analyze() {
    var t1 = $("#text1").val().toUpperCase();
    var t2 = $("#text2").val().toUpperCase();

    //Skip if t1 or t2 is empty
    if(t1.length == 0 || t2.length == 0) {
        return;
    }

    var isAnagram = true;
    console.log("Analyzing " + t1 + " and " + t2);

    //Iterating characters from text1
    for(i=0; i<t1.length; i++) {
        //Ignore other characters
        var char = t1.charAt(i);
        if(acceptedChars.includes(char)) {
            //Check if current char exists in text 2
            if(t2.includes(char)) {
                //Check if same occurence in text 2
                var t1Occurence = t1.match(new RegExp(char, "g")).length;
                var t2Occurence = t2.match(new RegExp(char, "g")).length;
                if(t1Occurence == t2Occurence) {

                } else {
                    isAnagram = false;
                }
            } else {
                isAnagram = false;
                break;
            }
        }
    }

    if(isAnagram) {
        $(".alert").html("The text <strong>" + t1 + 
        "</strong> and <strong>" + t2 + "</strong> are anagrams")
        .removeClass("alert-primary alert-danger")
        .addClass("alert-success");
    } else {
        $(".alert").html("The text <strong>" + t1 + 
        "</strong> and <strong>" + t2 + "</strong> are not anagrams")
        .removeClass("alert-primary alert-success")
        .addClass("alert-danger");
    }
}