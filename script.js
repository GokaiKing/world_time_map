async function getUser(place) {
    const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=cb792248f540420cb34e2c832e125bdf&location=${place}`
    
    const response = await fetch(api_url);
    
    const data = await response.json();
    
    time = data.datetime;
    // arr = Array.from(time)
    // arr.splice(0, 11)
    // arr.toString()
    // timezone = (arr.splice(0, 5)).join("");
    document.getElementById("time").innerText = `La hora en...${place} = ${time} ${data.timezone_abbreviation}`

}

document.querySelectorAll(".allPaths").forEach(e => {
e.setAttribute('class', `allPaths ${e.id}`);
e.addEventListener("mouseover", function () {
    window.onmousemove=function (j) {
        x = j.clientX
        y = j.clientY
        document.getElementById('name').style.top = y-60  + 'px'
        document.getElementById('name').style.left = x +10 + 'px'
    }
    const classes=e.className.baseVal.replace(/ /g, '.')         
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        country.style.fill = "pink"
    })
    document.getElementById("name").style.opacity = 1
    
    document.getElementById("namep").innerText = e.id
})
e.addEventListener("mouseleave", function () {
    const classes=e.className.baseVal.replace(/ /g, '.')
    document.querySelectorAll(`.${classes}`).forEach(country =>{
        country.style.fill = "#ececec"
    })
    document.getElementById("name").style.opacity = 0
})

e.addEventListener("click",function(){
    getUser(e.id)
})

})

 /*document.getElementById("searchBtn").addEventListener("click", function () {
     country = document.getElementById("search").value
     document.querySelectorAll(`.allPaths`).forEach(e => {
         e.style.fill = "#ececec"
     })
     document.querySelectorAll(`#${country}`).forEach(e => {
         e.style.fill = "red"
     })
 })*/

 document.getElementById('busqueda').addEventListener('click', function(){
    const ciudad = document.getElementById('citySearch').value;
    const pais = document.getElementById('countrySearch').value;
    buscarEspecifico(ciudad, pais);
})

async function buscarEspecifico(ciudad, pais){
    const api_url = `https://timezone.abstractapi.com/v1/current_time/?api_key=cb792248f540420cb34e2c832e125bdf&location=${ciudad},${pais}`;
    
    const response = await fetch(api_url);
    
    const data = await response.json();
    
    time = data.datetime;
    document.getElementById("time").innerText = `La hora en... ${ciudad}, ${pais} = ${time} ${data.timezone_abbreviation}`;
}
