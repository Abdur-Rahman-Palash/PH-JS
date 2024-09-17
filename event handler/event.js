// part01
const makeOrange = document.getElementById("orange");
makeOrange.onclick = function orange(){
    document.body.style.backgroundColor= 'orange';
};
// part02
const pink = document.getElementById('pink').addEventListener('click' , function(){
    document.body.style.backgroundColor = 'pink';
})
// part03
document.getElementById('another').addEventListener('click', function(){
const handleStatus = document.getElementById('another-text');
handleStatus.innerText='another part has changed';
})
// part04
document.getElementById('post').addEventListener('click', function(){
const commentBox = document.getElementById('new-comment');
const newComment = commentBox.value;
const content = document.getElementById('content');
const p = document.createElement('p');
p.innerText = newComment;
content.appendChild(p);
commentBox.value = '';
})
// part05
document.getElementById('delete-confirm').addEventListener('keyup', function(event){
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if(text === 'delete'){
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled', true);
    }
})
// part06

document.getElementById('btn-delete').addEventListener('click', function(){
    const secret = document.getElementById('secret-info');
    secret.style.display = 'none';
})
