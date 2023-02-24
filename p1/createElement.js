let p=document.createElement("p")
console.log(p);
p.textContent="hello"
document.body.appendChild(p)

let ol=document.createElement("ol")
console.log(ol);
document.body.appendChild(ol)
ol.setAttribute("type","A")

let li1=document.createElement("li")
li1.textContent="one"
ol.appendChild(li1)

let li2=document.createElement("li")
li2.textContent="two"
ol.appendChild(li2)
let li3=document.createElement("li")
li3.textContent="three"
ol.appendChild(li3)


let table=document.createElement("table")
document.body.appendChild(table)

let tr=document.createElement("tr")
table.appendChild(tr)

let td1=document.createElement("td")
tr.appendChild(td1)
td1.textContent="Class"

let td2=document.createElement("td")
tr.appendChild(td2)
td2.textContent="Id"

let td3=document.createElement("td")
tr.appendChild(td3)
td3.textContent="Name"
// --------------
let tr1=document.createElement("tr")
table.appendChild(tr1)
let td4=document.createElement("td")
tr1.appendChild(td4)
let td5=document.createElement("td")
tr1.appendChild(td5)
let td6=document.createElement("td")
tr1.appendChild(td6)

let tr2=document.createElement("tr")
table.appendChild(tr2)
let td7=document.createElement("td")
tr2.appendChild(td7)
let td8=document.createElement("td")
tr2.appendChild(td8)
let td9=document.createElement("td")
tr2.appendChild(td9)

let tdd=document.getElementsByTagName("td")
for(let i=0;i<tdd.length;i++){
    tdd[i].style.width="70px"
    tdd[i].style.height="30px"
    tdd[i].style.backgroundColor="red"
    tdd[i].style.textAlign="center"
}