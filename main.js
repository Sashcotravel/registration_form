let box1 = document.querySelector('.box1')
let box2 = document.querySelector('.box2')
let box3 = document.querySelector('.box3')
let pole1 = document.querySelector('.pole1')
let pole2 = document.querySelector('.pole2')
let pole3 = document.querySelector('.pole3')
let pole4 = document.querySelector('.pole4')
let pole5 = document.querySelector('.pole5')
let pole6 = document.querySelector('.pole6')
let but1 = document.querySelector('.but1')
let but2 = document.querySelector('.but2')
let a
let s
let d
let f
let arrData = []

let lName = /(?<name>^[a-zA-Z]{4,16}$)/
let lLName = /(?<lnameL>^[a-zA-Z]{4,16}$)/
let pAss = /(?<passw>^[a-zA-Z0-9_\.&-]{4,16}$)/
let eMail = /(?<email>^[a-zA-Z0-9_#&-]{1,}@{1}[a-zA-Z]+[.]{1}[a-zA-Z]+$)/

pole1.addEventListener('blur', function(){
    if(!lName.test(pole1.value)){
        pole1.style.border = '3px solid red'
    } 
    else {
        pole1.style.border = '3px solid lightseagreen'
        s = true
    }
})

pole2.addEventListener('blur', function(){
    if(!lLName.test(pole2.value)){
        pole2.style.border = '3px solid red'
    } else {
        pole2.style.border = '3px solid lightseagreen'
        a = true
    }
})

pole3.addEventListener('blur', function(){
    if(!eMail.test(pole3.value)){
        pole3.style.border = '3px solid red'
    } else {
        pole3.style.border = '3px solid lightseagreen'
        d = true
    }
})


pole4.addEventListener('blur', function(){
    if(!pAss.test(pole4.value)){
        pole4.style.border = '3px solid red'
    } else {
        pole4.style.border = '3px solid lightseagreen'
        f = true
    }
})


but1.addEventListener('click', function(){
    if(s && a && d && f){

        let { name } = lName.exec(pole1.value).groups;
        let { lnameL } = lLName.exec(pole2.value).groups;
        let { email } = eMail.exec(pole3.value).groups;
        let { passw } = pAss.exec(pole4.value).groups;
        let obj = { name, lnameL, email, passw }
        if(localStorage.length > 0 && localStorage.getItem('arrData')){
            arrData = JSON.parse(localStorage.getItem('arrData'))
        }
        if(!arrData.some( name => name.email === pole3.value)){
            arrData.push(obj)
            localStorage.setItem('arrData', JSON.stringify(arrData))

            pole1.value = ''
            pole2.value = ''
            pole3.value = ''
            pole4.value = ''
            pole4.style.border = 'none'
            pole3.style.border = 'none'
            pole2.style.border = 'none'
            pole1.style.border = 'none'
        } else { 
            alert('Така пошта вже існує')
        } 
    }
})

let m
let n
let b
let v

pole5.addEventListener('blur', function(){
    arrData = JSON.parse(localStorage.getItem('arrData'))
    if(arrData.some( e => e.email === pole5.value)){
        console.log('yes');
        arrData.forEach(e => {
            if(e.email == pole5.value){
                m = e.name
                b = true
            }
        });
    } else {
        console.log('no');
    } 
})

pole6.addEventListener('blur', function(){
    arrData = JSON.parse(localStorage.getItem('arrData'))
    if(arrData.some( e => e.passw === pole6.value)){
        console.log('yes');
        arrData.forEach(e => {
            if(e.email == pole5.value){
                n = e.lnameL
                v = true
            }
        });
    } else {
        console.log('no');
    } 
})

but2.addEventListener('click', function(){
    if(b && v){
        box3.style.display = 'block'
        box2.style.display = 'none'
        document.querySelector('.nameUs').textContent = m + " " + n
        document.querySelector('.mailUs').textContent = pole5.value
        pole5.value = ''
        pole6.value = ''
    } else {
        alert('Неправильний логін чи пароль')
    }
})

document.querySelector('.singIn').addEventListener('click', function(){
    box1.style.display = 'none'
    box2.style.display = 'block'
})

document.querySelector('.singUp').addEventListener('click', function(){
    box1.style.display = 'block'
    box2.style.display = 'none'
})

document.querySelector('.but3').addEventListener('click', function(){
    box3.style.display = 'none'
    box2.style.display = 'block'
    document.querySelector('.nameUs').textContent = ''
    document.querySelector('.mailUs').textContent = ''
})