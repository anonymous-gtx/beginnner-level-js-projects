const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) =>{
    insert.innerHTML = `
    <div class='color'>
    <span>Key Pressed: ${e.key === ' ' ? 'Space' : e.key}</span>
    </div>
    `
});