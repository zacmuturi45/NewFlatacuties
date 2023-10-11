// Your code here
document.addEventListener('DOMContentLoaded', (event) => {




    fetch('http://localhost:3000/characters')
    .then((resp) => resp.json())
    .then((data) => create(data));
    
    
    const input = document.querySelector('input#votes');
    const characterVotes = document.getElementById('vote-count');
    const form = document.getElementById('votes-form');
    const button = document.querySelector('button#reset-btn');
    
    const cute = document.getElementById('name');
    const img = document.getElementById('image');
    cute.textContent = 'Mr. Cute';
    img.src = "https://media.tenor.com/6xgziLBgq5IAAAAC/animated-cat.gif";
    characterVotes.textContent = 0;
    
    
    
    
    
    function create(data) {
        const span1 = document.createElement('span');
        const span2 = document.createElement('span');
        const span3 = document.createElement('span');
        const span4 = document.createElement('span');
        const span5 = document.createElement('span');
        span1.setAttribute('id', 'character-bar span');
        span2.setAttribute('id', 'character-bar span');
        span3.setAttribute('id', 'character-bar span');
        span4.setAttribute('id', 'character-bar span');
        span5.setAttribute('id', 'character-bar span');
        const div = document.getElementById('character-bar');
        const text1 = document.createTextNode(data[0].name);
        const text2 = document.createTextNode(data[1].name);
        const text3 = document.createTextNode(data[2].name);
        const text4 = document.createTextNode(data[3].name);
        const text5 = document.createTextNode(data[4].name);
        span1.appendChild(text1);
        span2.appendChild(text2);
        span3.appendChild(text3);
        span4.appendChild(text4);
        span5.appendChild(text5);
        div.appendChild(span1);
        div.appendChild(span2);
        div.appendChild(span3);
        div.appendChild(span4);
        div.appendChild(span5);
    
    
    
        span1.addEventListener('click', function() {
            const cute = document.getElementById('name');
            const img = document.getElementById('image');
            cute.textContent = data[0].name;
            img.src = "https://media.tenor.com/6xgziLBgq5IAAAAC/animated-cat.gif";
            characterVotes.textContent = data[0].votes;
    
            form.reset();
        })
    
        span2.addEventListener('click', function() {
            const cute = document.getElementById('name');
            const img = document.getElementById('image');
            cute.textContent = data[1].name;
            img.src = "https://i.pinimg.com/originals/c8/9f/ef/c89fefe41a8c0ebd944cf88ca60381e8.gif";
            form.reset();
            characterVotes.textContent = data[1].votes;
        })    
    
    
        span3.addEventListener('click', function() {
            const cute = document.getElementById('name');
            const img = document.getElementById('image');
            cute.textContent = data[2].name;
            img.src = "https://media2.giphy.com/media/20G9uNqE3K4dRjCppA/source.gif";
            characterVotes.textContent = data[2].votes;
    
            form.reset();
        })
    
    
        span4.addEventListener('click', function() {
            const cute = document.getElementById('name');
            const img = document.getElementById('image');
            cute.textContent = data[3].name;
            img.src = "http://bestanimations.com/Animals/Mammals/Cats/Lions/animated-lion-gif-11.gif";
            characterVotes.textContent = data[3].votes;
    
            form.reset();
        })
    
        span5.addEventListener('click', function() {
            const cute = document.getElementById('name');
            const img = document.getElementById('image');
            cute.textContent = data[4].name;
            img.src = "https://media.giphy.com/media/ALalVMOVR8Qw/giphy.gif";
            characterVotes.textContent = data[4].votes;
    
            form.reset();
        })
    }
    form.addEventListener('submit', function(e) {
        e.preventDefault();
            let b = parseInt(input.value);
            let p = parseInt(characterVotes.textContent);
            if (b >= 0) {characterVotes.textContent = p += b} else {input.placeholder = 'Please keep voting'};
            form.reset();
        });
    
        button.addEventListener('click', function (e) {
            event.preventDefault();
            form.reset();
            characterVotes.textContent = 0;
        })
    
    
    
    });
    
    
    
