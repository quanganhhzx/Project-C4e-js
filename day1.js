let exercise1 = [
  {
    name: "day1",
    description:
      "This move is part of the toning circuit of Women's Health's Get a Bikini Body Now Plan. Do you want to tear away your cover-up with confidence this summer? This easy to follow program is designed to make fitness your new favorite habit. We promise sexy results you're sure to love!",
    length: "10-12 reps ",
    img: "https://media1.giphy.com/media/13v55Ya4uWsXS/giphy.gif",
  },
];
let exercise2 = [
  {
    name: "day1",
    description:
      "– Ván: 3 <br>– Đứng thẳng người, hai tay duỗi thẳng 2 bên thân người.<br> – Duỗi chân phải dài sang bên phải về phía trên, hạ người xuống cho tới khi nào đùi song song với sàn, duỗi chân còn lại thẳng ra. Hai mũi chân hướng về phía trước. Hai tay ép chặt lại.<br> – Sau đó, chéo chân phải ra sau, hạ người xuống cho tới khi nào cẳng tay song song với sàn. Hai tay duỗi thẳng hai bên thân người. <br> – Đứng thẳng dậy và tiếp tục lặp lại. Đó là 1 lần lặp. <br> – Tiếp tục lặp lại thêm 19 lần nữa.",
    length: "10-12 reps ",
    img:
      "https://media1.popsugar-assets.com/files/thumbor/96s6HoLEf68HMkyKT8X675yRWow/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/01/18/802/n/1922729/75aa55118c232361_EXAMPLE.curtsy-lunge.gif",
  },
];
let exercise3 = [
  {
    name: "day1",
    description:
      "Tập thể dục cho đôi chân thẳng là kỹ thuật hiệu quả nhất cho phụ nữ. Đây là kỹ thuật tải tối đa các cơ bắp chân và mông. Hãy nhớ rằng bài tập này không gây hại cho cơ thể, cần tuân thủ nghiêm ngặt kỹ thuật thực hiện của nó, được phát triển bởi các chuyên gia. Nếu không, bạn có nguy cơ kéo căng cơ bắp hoặc thậm chí phá vỡ chúng, do đó tự đẩy mình ra khỏi môn thể thao này trong nhiều tuần hoặc thậm chí vài tháng. Để thực hiện đúng các deadlifts trên đôi chân thẳng, cần phải tuân theo một số quy tắc đơn giản nhưng quan trọng.",
    length: "10-12 reps ",
    img: "https://thumbs.gfycat.com/FragrantClosedBettong-small.gif",
  },
];
let exercise4 = [
  {
    name: "day1",
    description:
      "Forearm Plank Pose là một bài tập tuyệt vời cho các cơ cốt lõi của bạn, đặc biệt là cơ bụng xiên, đồng thời xây dựng sức mạnh ở vai và lưng trên. Nếu bạn thường xuyên thực hiện tư thế này, bạn sẽ có vòng eo thon gọn hơn và phần cơ bụng chuẩn. ",
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
    let htmlday = `<img src='${element.img}' style="width: 100%; height: 100%;"/> `;
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
    let htmlday = `<img src='${element.img}' /> `;
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
