// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
//const modalH = document.querySelector('div')
//modalH.hidden = true
const likes = document.querySelectorAll('.like-glyph')
 

function likesCallBack(e) {
  const heart = e.target;
  mimicServerCall()
  .then((res) => {
    heart.innerText = FULL_HEART
    //console.log(res)
  })
  .catch((res) => {
    //modalH.hidden = false
  })
  
}
for (const glyph of likes) {
  glyph.addEventListener('click', likesCallBack)
  
}











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