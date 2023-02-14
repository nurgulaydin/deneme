let kisiler = [
  {
    ad: "Nurgül",
    soyad: "Aydın",
    yas: 22,
    maas: 5500,
  },
  {
    ad: "Selenay",
    soyad: "Abana",
    yas: 23,
    maas: 6000,
  },
  {
    ad: "Ravil",
    soyad: "Askarov",
    yas: 21,
    maas: 6500,
  },
];
let ortYas = 0;
let ortMaas = 0;

window.addEventListener("load", () => {
  kisiler.forEach((value, index) => {
    document.getElementById("kisi" + index).innerHTML = "Ad: " + value.ad + "</br>" + "Soyad:" + value.soyad + "</br>" + "Yaş:" + value.yas + "</br>" + "Maaş:" + value.maas;
    ortMaas += value.maas;
    ortYas += value.yas;
  });
  ortMaas = ortMaas / 3;
  ortYas = ortYas / 3;
});

function maasHesapla() {
  document.getElementById("maasSonuc").innerHTML = ortMaas;
}

function yasHesapla() {
  document.getElementById("yasSonuc").innerHTML = ortYas;
}
