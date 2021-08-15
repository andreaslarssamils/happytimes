/**
Challenge: 

- Start building out the BoredBot Skeleton however you'd like. 
    That will include:
    - A title for the app ("BoredBot" might be a good start 😉)
    - A placeholder element that will be populated with the random 
      idea we get from the API
    - A button to click for triggering the GET request to the Bored API. 
      (Don't worry about implementing the button quite yet)
*/

const btn = document.querySelector('button');
btn.addEventListener('click', function () {
  fetch('https://apis.scrimba.com/bored/api/activity')
    .then((response) => response.json())
    .then((data) => {
      document.querySelector('#text').textContent = data.activity;
    });
});

// fetch('https://dog.ceo/api/breeds/image/random')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     document.querySelector('#image-container').innerHTML = `
//       <img src=${data.message}>
//     `
//   });

/**
Challenge:

1. Fetch a random image from the Dog API again 
(https://dog.ceo/api/breeds/image/random)

2. Access the DOM and insert the URL you got from the
API as an image `src` property (probably easiest if 
you create the image completely here in the JS and add 
it as the innerHTML of another element on the DOM)
*/

// fetch("https://apis.scrimba.com/bored/api/activity")
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     document.querySelector('#text').textContent = data.activity
//   })
