var lib = "let it be";
var firstLyrics = "whisper words of wisdom, ";
var secondLyrics = "there will be an answer, ";
var allLyrics = "";

const sing = () =>{

        for(i=0; i<4; i++){
                allLyrics += lib + ", ";
        }
    

        allLyrics += firstLyrics;

        for(i=0; i<5; i++){
                allLyrics += lib + ", ";
        }

        allLyrics += secondLyrics;
        allLyrics += lib + " open in browser";

        return allLyrics;

}
console.log(sing(allLyrics));

alert("it works!")

