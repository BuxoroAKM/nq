const center = document.getElementById('center');
localStorage.clear();

center.onclick = (e) =>{
    if(e.target.classList.contains('nqButton')){
        let id = e.target.id;
        id = id.split('');
        id.shift();
        id = id.join('');
        console.log(id)
        
        window.location.href = './nq.html'
        localStorage.setItem('id', id)
        console.log(id)
    }
};