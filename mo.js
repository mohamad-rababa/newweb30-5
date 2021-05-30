alert("Hello")
// var age =prompt("please enter your favourite number");
// if (number >=0 || number)

// var txt;
var r = prompt("what your favourite team, please enter barca or faisaly ");

while (r!="barca" || r!="faisaly")
{if (r == 'barca')
{
  alert ( "this is wounderful");break;}
  else if(r=="faisaly") {
    alert("faisaly is good");break;}
    else {
      r= prompt ('please type either barca or faisaly')
    }
  }



var rate =prompt ('how many star rating would you give this content, 1-5?');


for(var i=0;i<rate;i++)
{ document.write('<img src="https://media.gettyimages.com/photos/lionel-messi-of-barcelona-gestures-during-the-uefa-champions-league-picture-id1143242800?k=6&m=1143242800&s=612x612&w=0&h=Pc1h5X5H4Fft3sFUSa5Mv7-iETFSp1kr2OfAaiA8yH8="> ', i)
}