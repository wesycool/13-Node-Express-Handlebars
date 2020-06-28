//Add Burger onClick Function
async function addBurger(event){
    const data = event.target.previousElementSibling.value
    await fetch(`/api/add/${data}`, { method: 'POST' })
}

// Devour Burger onClick Function
async function devourBurger(event){
    const id = event.target.id
    await fetch(`/api/devour/${id}`, { method: 'PUT' })
}