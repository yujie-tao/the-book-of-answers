var allText;
var answers; 

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
                answers = allText.split("\n");
                console.log(answers);
            }
        }
    }
    rawFile.send(null);
}
 
 readTextFile("./answers.txt");


 var rand = answers[Math.floor(Math.random() * answers.length)];
 console.log(rand);
document.getElementById('answer').innerHTML = rand;


