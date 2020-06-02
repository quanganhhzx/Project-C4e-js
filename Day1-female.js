let exercise = [
  {
      name: "day1",
      description: 'Perform one set of each exercise. Repeat circuit twice (or add a third circuit for a really tough workout)! Not sure how to perform the exercises? Just click on the title of each exercise for a video demonstration. As always, be sure to check with a doctor before beginning any exercise routine! Be safe!',
      length:"10-12 reps ",
      img : 'https://media1.giphy.com/media/13v55Ya4uWsXS/giphy.gif'
     
  
  },
]
function Show(list){
  let day = document.getElementById("exercise-image");
  let desc = document.getElementById("des");

day.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    const element = list[i]
    let htmlday = `        <img src='${element.img}' > `;
    let htmldes  =`${element.description}`
day.innerHTML += htmlday;
desc.innerHTML +=htmldes
  }
}
Show(exercise);






function Showmore(){
  document.getElementById("show").style.display ="block"
}