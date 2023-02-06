let kisiler = [
    {
        ad: "Nurgül",
        soyad: "Aydın",
        yas: 22,
        maas: 5500
    },
    {
        ad: "Selenay",
        soyad: "Abana",
        yas: 23,
        maas: 6000
    },
    {
        ad: "Ravil",
        soyad: "Askarov",
        yas: 21,
        maas: 6500
    }
]
let $k1 = document.getElementById("kisi1")
let $k2 = document.getElementById("kisi2")
let $k3 = document.getElementById("kisi3")


function kisi1() {
   $k1.textContent = "Ad: " + kisiler[0].ad + "</br>" + "Soyad:" + kisiler[0].soyad  
    + "</br>" + "Yaş:" + kisiler[0].yas + "</br>" + "Maaş:" +  kisiler[0].maas
}

function kisi2() {
    $k2.textContent = "Ad: " + kisiler[1].ad + "</br>" + "Soyad:" + kisiler[1].soyad  
    + "</br>" + "Yaş:" + kisiler[1].yas + "</br>" + "Maaş:" +  kisiler[1].maas
}

function kisi3() {
    $k3.textContent = "Ad: " + kisiler[2].ad + "</br>" + "Soyad:" + kisiler[2].soyad  
    + "</br>" + "Yaş:" + kisiler[2].yas + "</br>" + "Maaş:" +  kisiler[2].maas
}


function maasHesapla() {
    let ort = (kisiler[0].maas + kisiler[1].maas + kisiler[2].maas) / 3
    document.getElementById("maasSonuc").innerHTML = ort;
}

function yasHesapla() {
    let ort = (kisiler[0].yas + kisiler[1].yas + kisiler[2].yas) / 3;
    document.getElementById("yasSonuc").innerHTML = ort;
}

window.addEventListener("DOMContentLoaded", ()=> {kisi1()
    kisi2()
    kisi3()})
