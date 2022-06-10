


function GetValue(){
    const restaurants = ["Sweet Lulas", "Pizzeria Manninos", "Manninos Cucina Italiana", "CoCo's Cocina", "Dia De Los Burritos", "Family Mediterranean Cuisine", "Ming Lok", "Milkweed Table and Market", "Merrymans Pub"];
    let random = restaurants[Math.floor(Math.random() * restaurants.length)];
    alert(random)
    document.getElementById('resButton').innerHTML=random
    
}
