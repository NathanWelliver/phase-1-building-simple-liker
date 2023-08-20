// Defining text characters for the empty and full hearts for you to use later.
const EMPTYHEART = '♡';
const FULLHEART = '♥';

document.addEventListener('DOMContentLoaded', () => {
  const emptyHeart = document.querySelector('.empty-heart');
  const fullHeart = document.querySelector('.full-heart');
  const errorModal = document.getElementById('modal');
  
  // Add hidden class to error modal on page load
  errorModal.classList.add('hidden');

  emptyHeart.addEventListener('click', () => {
    mimicServerCall()
      .then(() => {
        emptyHeart.classList.remove('empty-heart');
        emptyHeart.classList.add('full-heart', 'activated-heart'); // Combine class additions
      })
      .catch((error) => {
        // Display error modal and message
        errorModal.classList.remove('hidden');
        errorModal.textContent = error;

        // Hide the error modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add('hidden');
        }, 3000);
      });
  });

  fullHeart.addEventListener('click', () => {
    emptyHeart.classList.add('empty-heart');
    emptyHeart.classList.remove('full-heart', 'activated-heart'); // Remove activated-heart class
  });
});


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
