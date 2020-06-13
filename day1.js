let exercise1 = [
  {
    name: "day1",
    description:"<b>Hướng dẫn tập squat </b><br> Đứng thẳng, hai chân đứng mở rộng bằng vai và nằm trên một đường thẳng, mũi chân hơi lệch hướng ra ngoài góc từ 5-20 độ và căng vai, ưỡn ngực. Hướng mắt nhìn thẳng về phía trước, hai tay nên đan vào nhau tại vị trí trước ngực",
    length: "10-12 reps ",
    img: "https://media1.giphy.com/media/13v55Ya4uWsXS/giphy.gif",
  },
];
let exercise2 = [
  {
    name: "day1",
    description:
      "<b>Hướng dẫn tập </b><br>  Đứng thẳng người, hai tay duỗi thẳng 2 bên thân người.<br> – Duỗi chân phải dài sang bên phải về phía trên, hạ người xuống cho tới khi nào đùi song song với sàn, duỗi chân còn lại thẳng ra. Hai mũi chân hướng về phía trước. Hai tay ép chặt lại.<br> – Sau đó, chéo chân phải ra sau, hạ người xuống cho tới khi nào cẳng tay song song với sàn. Hai tay duỗi thẳng hai bên thân người. <br> – Đứng thẳng dậy và tiếp tục lặp lại. Đó là 1 lần lặp. Tiếp tục lặp lại thêm 19 lần nữa.",
    length: "10-12 reps ",
    img:
      "https://thumbs.gfycat.com/CheeryTartBarnswallow-size_restricted.gif",
  },
];
let exercise3 = [
  {
    name: "day1",
    description:
      " <b>Hướng dẫn tập </b><br> Bước 1: Tạo tư thế đứng chuẩn. <br>Bước 2: Điều chỉnh tư thế. <br>Bước 3: Thực hiện nâng tạ. <br>Bước 4: Hạ tạ xuống.<br> <b>Lưu ý khi tập Deadlift đúng cách.</b> Khởi động kỹ trước khi tập. Trước khi tập luyện bạn cần khởi động thật kỹ các cơ để tránh chấn thương và chuột rút khi tập.Hít thở đúng cách đóng vai trò khá quan trọng khi tập Deadlift giúp đỡ tốn sức và tập được nhiều lần hơn. Cách hít thở chuẩn đó là, trước khi kéo tạ hít sâu và giữ trong 1/4 chặng đường nâng tạ lên; từ từ thở ra khi tới 2/4 chặng đường nâng tạ lên và thở ra hoàn toàn khi đến vị trí cao nhất.",
    length: "10-12 reps ",
    img: "https://i.pinimg.com/originals/7b/1f/21/7b1f2113448c77f1a92ab2c1ab5e288f.gif",
  },
];
let exercise4 = [
  {
    name: "day1",
    description:
      " <b>Hướng dẫn tập </b><br> Forearm Plank Pose thực hiện khá dễ dàng và đơn giản. Bạn chỉ cần nằm sấp, chống hai khuỷu tay vuông góc ngay dưới vai. Nhón hai mũi chân lên, và nâng người lên giữ lưng, hông và đầu thẳng hàng, bạn chỉ việc giữ im tư thế như thế ít nhất là 30 giây, cố gắng siết chặt cơ bụng của bạn và thở đều chứ đừng có nín thở luôn nha. Bài tập này hiệu quả ăn thua vào khả năng giữ im của bạn tới mức nào. ",
    length: "10-12 reps ",
    img:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/4-forearm-plank-rocks-fw-and-bk-1550760923.gif?resize=480:*",
  },
];
function Show1(list) {
  let day = document.getElementById("exercise-image");
  let desc = document.getElementById("des");

  day.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const element = list[0];
    let htmlday = `<img src='${element.img}' /> `;
    let htmldes = `${element.description}`;
    day.innerHTML += htmlday;
    desc.innerHTML += htmldes;
  }
}
function Show2(list) {
  let day = document.getElementById("exercise-image2");
  let desc = document.getElementById("des2");

  day.innerHTML = "";

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    let htmlday = `<img src='${element.img}' /> `;
    let htmldes = `${element.description}`;
    day.innerHTML += htmlday;
    desc.innerHTML += htmldes;
  }
}
function Show3(list) {
  let day = document.getElementById("exercise-image3");
  let desc = document.getElementById("des3");

  day.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    let htmlday = `<img src='${element.img}'/> `;
    let htmldes = `${element.description}`;
    day.innerHTML += htmlday;
    desc.innerHTML += htmldes;
  }
}
function Show4(list) {
  let day = document.getElementById("exercise-image4");
  let desc = document.getElementById("des4");

  day.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    let htmlday = `<img src='${element.img}' /> `;
    let htmldes = `${element.description}`;
    day.innerHTML += htmlday;
    desc.innerHTML += htmldes;
  }
}

Show1(exercise1);
Show2(exercise2);
Show3(exercise3);
Show4(exercise4);
function Showmore1() {
  document.getElementById("show1").style.display = "block";
  document.getElementById("show2").style.display = "none";
  document.getElementById("show3").style.display = "none";
  document.getElementById("show4").style.display = "none";
}
function Showmore2() {
  document.getElementById("show2").style.display = "block";
  document.getElementById("show1").style.display = "none";

  document.getElementById("show3").style.display = "none";
  document.getElementById("show4").style.display = "none";
}

function Showmore3() {
  document.getElementById("show3").style.display = "block";
  document.getElementById("show1").style.display = "none";
  document.getElementById("show2").style.display = "none";

  document.getElementById("show4").style.display = "none";
}

function Showmore4() {
  document.getElementById("show4").style.display = "block";
  document.getElementById("show1").style.display = "none";
  document.getElementById("show2").style.display = "none";
  document.getElementById("show3").style.display = "none";
}
let listMusic = [{ name: "Music EDM", song: "music/nhac.mp3" }];
function showSong(list) {
  let music = document.getElementById("bodyContent");
  music.innerHTML = "";
  for (let i = 0; i < listMusic.length; i++) {
    const element = listMusic[i];
    let html = `
              <span>${element.name}</span>
              <span><audio controls>
              <source src="${element.song}"  type="audio/mpeg">
            </audio></span>`;
    music.innerHTML += html;
  }
}
showSong(listMusic);

var timeLeft = 90;
var timeLeft2 = 90;
var timeLeft3 = 90;
var timeLeft4 = 90;
var elem = document.getElementById("timer");
var elem2 = document.getElementById("timer2");
var elem3 = document.getElementById("timer3");
var elem4 = document.getElementById("timer4");
var timerId = 0;
var timerId2 = 0;
var timerId3 = 0;
var timerId4 = 0;

function countdown() {
  if (timeLeft == 0) {
    clearTimeout(timerId);
    alert("Chúc mừng bạn hoàn thành bài tập.");
  } else {
    elem.innerHTML = " Còn "+ timeLeft + " giây ";
    timeLeft--;
  }
}

function showCountDown() {
  if (timerId === 0) {
    countdown();
    timerId = setInterval(countdown, 1000);
  }
}
function countdown2() {
  if (timeLeft2 == 0) {
    clearTimeout(timerId2);
    alert("Chúc mừng bạn hoàn thành bài tập.");
  } else {
    elem2.innerHTML =" Còn "+ timeLeft2 + " giây ";
    timeLeft2--;
  }
}

function showCountDown2() {
  if (timerId2 === 0) {
    countdown2();
    timerId2 = setInterval(countdown2, 1000);
  }
}
function countdown3() {
  if (timeLeft3 == 0) {
    clearTimeout(timerId3);
    alert("Chúc mừng bạn hoàn thành bài tập.");
  } else {
    elem3.innerHTML =" Còn "+ timeLeft3 + " giây ";
    timeLeft3--;
  }
}

function showCountDown3() {
  if (timerId3 === 0) {
    countdown3();
    timerId3 = setInterval(countdown3, 1000);
  }
}
function countdown4() {
  if (timeLeft4 === 0) {
    clearTimeout(timerId4);
    alert("Chúc mừng bạn hoàn thành bài tập.");
  } else {
    elem4.innerHTML = " Còn "+ timeLeft4 + " giây ";
    timeLeft4--;
  }
}
function showCountDown4() {
  if (timerId4 === 0) {
    countdown4();
    timerId4 = setInterval(countdown4, 1000);
  }
}

function closeimage(){
  document.getElementById("hide").style.display = "none";
  alert("Bạn có muốn tắt quảng cáo này ?");
  document.getElementById("hides").style.display = "none";

}
function alertt(){
  alert("Hệ thống chưa phát triển");
  window.location.reload();
}

