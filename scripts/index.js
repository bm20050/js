//DOM 요소 생성 함수
// function domAdd() {
//     console.log('domAdd');
// }

const domAdd = () => {
    console.log('domAdd');
    const btn1 = document.createElement("button");
    btn1.innerHTML = "버튼1";
    btn1.id = "bt1";
    btn1.className = "btc"
    document.getElementById("content").append(btn1);

    const btn2 = document.createElement("button");
    btn2.innerHTML = "버튼2";
    btn2.id = "bt2";
    btn2.className = "btc"
    document.getElementById("content").append(btn2);

    const btn3 = document.createElement("button");
    btn3.innerHTML = "버튼3";
    btn3.id = "bt3";
    btn3.className = "btc"
    document.getElementById("content").append(btn3);
}

//DOM 요소 접근
const domRead = () => {
    const btc = document.querySelectorAll(".btc");
    console.log(btc);

    console.log("**for**");
    //for 순회
    for (let i = 0; i < btc.length; i++) {
        console.log(btc[i]);
    }

    console.log("**for in**");
    //for ... in 순회
    for (let k in btc) {
        console.log(btc[k]);
        if (k == 1) break;
    }

    console.log("**foreach**");
    //foreach 순회
    btc.forEach((item, k) => console.log(item, k));

    console.log("**for of**");
    //for...of 
    for (let [k, item] of btc.entries()) {
        console.log(k, item.innerHTML);
        if (k == 1) break;
    }
}

//자바스크립트 랜더링 제어
document.addEventListener("DOMContentLoaded", () => {
    //DOM 요소 생성
    domAdd();
    domRead();
});


