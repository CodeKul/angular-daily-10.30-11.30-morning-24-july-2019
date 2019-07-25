//var txt = document.getElementById('txt')

//var dv = document.getElementById(`dv`)

/*txt.onkeyup = function (ev) {
    console.log(ev['target']['value'].toUpperCase())
    dv.innerHTML = '<h1>'+ev['target']['value'].toUpperCase()+'</h1>'
}*/

function keyBinding(dv, data) {
    dv.innerHTML = '<h1>'+data.toUpperCase()+'</h1>'
}