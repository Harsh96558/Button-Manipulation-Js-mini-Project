let namastebtn_1=document.getElementById('btn_1');
namastebtn_1.addEventListener('click', showMsg);


function showMsg(){
    alert('Jai Shree Ram')
}


let namastebtn_2=document.getElementById('btn_2');
namastebtn_2.addEventListener('click', inputMsg);


function inputMsg(){
    let name=prompt('Enter Name of Student')
    namastebtn_2.textContent="ROLL NO.1:"+name;
}