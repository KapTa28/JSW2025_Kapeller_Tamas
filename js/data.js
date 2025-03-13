const fruits = [
    {
        id: 1, 
        name: "Banán",
        fat: 0.33,
        fiber: 2.6,
        calory: 89,
        protein: 1.09,
        carbohydrate: 22.8
    },
    {
        id: 2, 
        name: "Alma",
        fat: 0.17,
        fiber: 1.3,
        calory: 52,	
        protein: 0.26,
        carbohydrate: 13.8
    },
    {
        id: 3, 
        name: "Narancs",	
        fat: 0.12,	
        fiber: 2,
        calory: 47, 	
        protein: 0.94,
        carbohydrate: 11.8
    },
];

const lenyilo = document.getElementById('lenyilo')

for (elem of fruits){
    let option = document.createElement('option')
    option.textContent = elem.name
    option.value = elem.id
    lenyilo.append(option)
}

const szamitasgomb = document.getElementById('szamitas')
szamitasgomb.addEventListener('click', () => szamitas)

function szamitas(){
    if (lenyilo.value == ''){
        let hiba = document.createElement('div')
        hiba.classList.add('p-10px', 'w-full', 'border-red-600', 'text-red-600', 'bg-red-300')
        hiba.textContent = 'Válasszon egy gyümölcsöt a lenyíló listából!'
        lenyilo.append(hiba)
    }
}