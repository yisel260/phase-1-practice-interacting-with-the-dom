

let intervalId;

document.addEventListener('DOMContentLoaded', (e)=>{
    intervalId = setInterval(increment, 1000);
})



let clock = document.getElementById('counter')



function increment () { 
    clock.textContent =parseInt(clock.textContent) + 1
}

const minusBTN = document.getElementById('minus');
const plusBTN = document.getElementById('plus');
const heartBTN = document.getElementById('heart');
const pauseBTN = document.getElementById('pause');

minusBTN.addEventListener('click',function(){
   clock.textContent = parseInt(clock.textContent)-1
})

plusBTN.addEventListener('click',function(){
    clock.textContent = parseInt(clock.textContent)+1
})

numbersLiked =[];

heartBTN.addEventListener('click',function(){
  numbersLiked.push(clock.textContent)

  let count = numbersLiked.reduce((accumulator, currentValue) => {
    if (currentValue === clock.textContent) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0);

  let p = document.createElement('p')
  p.textContent = `${clock.textContent} has been liked ${count} times`
  document.querySelector('#list').appendChild(p)

})

pauseBTN.addEventListener('click', function(){
    
    if (pauseBTN.innerText === 'pause'){
    
    minusBTN.disabled = true
    plusBTN.disabled = true 
    heartBTN.disabled = true
    pauseBTN.textContent = "resume"
    clearInterval(intervalId);

    }
    else if (pauseBTN.innerText === 'resume'){
        
            minusBTN.disabled = false;
            plusBTN.disabled = false;
            heartBTN.disabled = false;
            pauseBTN.innerText = "pause";
            intervalId = setInterval(increment, 1000);

    }

    })

    document.querySelector('form').addEventListener('submit',function (e){
        e.preventDefault()
        newComment= document.getElementById ('comment-input').value
        handleComment(newComment)
    })

    function handleComment(comment){
    
    let p = document.createElement('p')
    p.textContent = `${comment}`
    document.getElementById('comment-form').appendChild(p)}