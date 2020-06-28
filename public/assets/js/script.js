//Add Burger onClick Function
async function addBurger(event){
    const data = event.target.previousElementSibling.value
    await fetch(`/api/${data}`, { method: 'POST' })
}