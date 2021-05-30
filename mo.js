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
{ document.write('<img src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349"> ', i)
}