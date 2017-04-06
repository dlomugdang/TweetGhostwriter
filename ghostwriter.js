function writeTweet()
{
  var intro = ["Have you seen", "When is the", "Can I use your", "I counted a stack full of"];
  var body = ["Pizzas", "bathroom", "Light sabers", "sewing machine", "vacation"];
  var end = ["tonight?", "asleep"];
  var randIndex = randomUpTo(intro.length-1);
  var randIndex2 =randomUpTo(body.length-1);
  var randIndex3 = randomUpTo(end.length-1);
  var sentence = intro[randIndex] + " " + body[randIndex2] + " " + end[randIndex3];

  document.getElementById("tweet").innerHTML = sentence;
}

//Generates a random whole number between 0 and max (inclusive)
function randomUpTo(max)
{
  return Math.floor(Math.random() * (max+1));
}
