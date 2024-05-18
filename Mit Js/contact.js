// var nameval = document.querySelector("#name")
// var gmailval = document.querySelector("#mail")
var firsttable = document.querySelector(".table1")
var newtable = document.querySelector(".table2")

function submit(){
    
    var newrow = document.createElement("tr")

    var newcol = document.createElement("td")
    newcol.textContent=word.value
    newrow.append(newcol)

    var newcol1 = document.createElement("td")
    newcol1.textContent=mail.value
    newrow.append(newcol1)

    var newcol2 = document.createElement("td")
    newcol2.innerHTML=("<button class='btn' onclick='deleteitem(event)'>Delete</button>")
    var btns = newcol2.querySelector(".btn")
    btns.style.backgroundColor="red"
    newrow.append(newcol2)

    newtable.appendChild(newrow)


}
function deleteitem(event){
    var removeitem = event.target
    var deleteitems = removeitem.closest("tr") 
    deleteitems.remove()

}