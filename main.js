// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errMsg = document.querySelector('#modal');
errMsg.classList.add('hidden');

const likeBtns = document.querySelectorAll('.like-glyph')
likeBtns.forEach(item => {
  item.addEventListener('click', function() {
    if (item.classList.contains('activated-heart')) {
      item.classList.remove('activated-heart');
      item.textContent = EMPTY_HEART;
      return;
    }
    mimicServerCall()
      .then(() => {
        item.textContent = FULL_HEART;
        item.classList.add('activated-heart');
      })
      .catch(() => {
        errMsg.classList.toggle('hidden');
        setTimeout(() => {
          errMsg.classList.toggle('hidden');
        }, 3000);
      })
  })
})
// likeBtns.forEach(item => item.addEventListener('click')

//add event listener to all .like elements
  //configure event listener with handler mimicServerCall
  //chain .then() to handler, which, if successful, changes the 
  //css of the specific target .like element
  //use a .catch() block to handle errors, and if there is one, 
  //toggle the .hiddenclassList on the error element



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
