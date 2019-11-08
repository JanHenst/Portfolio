
let modaal = document.querySelector('#modaalAchtergrond');
let modaalVenster = document.querySelector('#modaalVenster');
let modaalInhoud = document.querySelector('#modaalInhoud');
let triggers = document.querySelectorAll('.trigger');
let sluitKnop = document.getElementById('sluitKnop');
let arrow = document.getElementById('arrow');
let modaleInhouden = new Object();

const sluitModaal = () => {
  modaal.parentNode.removeChild(modaal);
  modaalVenster.innerHTML = '';
  document.getElementById('nav').style.display = "block";
}

modaalVenster.addEventListener('click', (e) => {
  e.stopPropagation();

})

sluitKnop.addEventListener('click', sluitModaal);
modaal.addEventListener('click',sluitModaal);

for(let i=0; i<triggers.length; i++){
  let item = triggers[i].hash.substr(1);
  modaleInhouden[item] = document.getElementById(item);
  triggers[i].addEventListener('click', (e)=> {
    e.preventDefault();
    modaalVenster.appendChild(sluitKnop);
    modaalVenster.appendChild(modaleInhouden[item]);
    document.body.appendChild(modaal);
    document.getElementById('nav').style.display = "none";
  })
}

for(elem in modaleInhouden){
  modaleInhouden[elem].parentNode.removeChild(modaleInhouden[elem]);
}

sluitModaal();
