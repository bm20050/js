//DOM 요소 생성 함수

const domAdd = () => {
    const btn1 = document.createElement("button");
    btn1.innerHTML = "주사위";
    btn1.id = "bt1";
    btn1.className = "btc"

    document.getElementById("content").append(btn1);
    
    const btn2 = document.createElement("button");
    btn2.innerHTML = "확인";
    btn2.id = "bt2";
    btn2.className = "btc"

    document.getElementById("content").append(btn2);
    
    const div2 = document.querySelector("#div2");
    for (let i = 1; i <= 6; i++) {
        div2.innerHTML += `<input type="radio" name="num" id="n${i}" value="1"><label for="n${i}">${i}</label>`;
    }
}


//Dom 요소 수정 
const domUpdate = () => {
    const div1 = document.querySelector("#div1");
    const f1 = document.querySelector("#f1");
    const bt1 = document.querySelector("#bt1");
    const bt2 = document.querySelector("#bt2");
    const 
    let n = Math.floor(Math.random() * 6) + 1;
    
    console.log(n);
    bt1.addEventListener("click", () => {
        div1.innerHTML = `<h1><img src="images/${n}.png"></h1>`;
    });    
    bt2.addEventListener("click", () => {
        if (n == )
        f1.innerHTML = `<h1><img src="images/${n}.png"></h1>`;
    });
}

//자바스크립트 랜더링 제어
document.addEventListener("DOMContentLoaded", () => {
    //DOM 요소 생성
    domAdd();
    
    //Dom 요소 변경
    domUpdate();

});



