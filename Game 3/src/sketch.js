//Declaring variables

var paper;
let leftarr = [];
let rightarr = [];
let correct = 0;

//Anonymus function which always runs when ever the appliaction is runs

$(function () {
    paper = new Raphael("container", "100%", "100%");
    c = paper.circle(330,320, 200).attr({ fill: "green", stroke: "none", opacity: 0.1 });

    startPoint = {}
    endPoint = {}

    startDragFunction = function (x, y, e) {
        startPoint.x = x;
        startPoint.y = y;
    }
    endDragFunction = function (x, y, e) {
        paper.path("M" + startPoint.x + "," + startPoint.y + "L" + (startPoint.x + endPoint.x) + "," + (startPoint.y + endPoint.y));
    }
    draggingFunction = function (x, y) {
        endPoint.x = x;
        endPoint.y = y;
    }
    paper.set(c).drag(draggingFunction, startDragFunction, endDragFunction);
});

document.getElementById("footer").style.zIndex = 1000

//targeting all the buttons with leftbtn class and adding listener to them to push their value in leftarr

let btns = document.querySelectorAll(".leftbtn");
btns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const { name, value } = e.target;
        leftarr.push(value)
    })
})

//targeting all the buttons with trghtbtn class and adding listener to them to push their value in rightarr

let rightbtns = document.querySelectorAll(".rightbtn");
rightbtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const { name, value } = e.target;
        rightarr.push(value)
    })
})

document.querySelectorAll("p").forEach(p => {
    p.style.zIndex = 10
})

let interval;

document.getElementById("timer").zIndex = 1000000;

//onload functions runs when the whole window in the browser is loaded and as soon as it loads the timer starts.

window.onload = () => {
    const date = Math.round(new Date().getTime() / 1000)
    const newdate = new Date((date + 30) * 1000)
    console.log(newdate)
    document.getElementById("music").play()

  //this intrval runs after every one second to check is if 30 seconds have passed if not then it will decrement the time by 1 second as in the application.
  
    interval = setInterval(() => {
        if (new Date() >= newdate) {
            clearInterval(interval)
            checkresults()
            document.getElementById("music").pause()
        }
        else {
            let tiktik = (Math.round(newdate.getTime() / 1000) - Math.round(new Date().getTime() / 1000))
            document.getElementById("timer").innerHTML = `<p> Time Remaining: ${tiktik} seconds</p>`
        }
    }, 1000);

}

//checkresults function compares the leftarray values with rightarrays and display the answer accordingly (how many are equal)

function checkresults() {
    leftarr.map((val, i) => {
        if (val === rightarr[i]) {
            correct = correct + 1
        }
    })
    document.getElementById("statement").innerHTML = `<p> Your correct answers are ${correct}`;
    clearInterval(interval)
    document.getElementById("music").pause()
}

