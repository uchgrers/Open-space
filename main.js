window.onload = function () {
   const inputField = document.querySelector('.pass-input');
   const enterPassButton = document.querySelector('.pass-button');
   const disabledInputs = document.getElementsByClassName('disabled-input');
   const launchButton = document.querySelector('.launch-button');
   const checkBoxes = Array.from(document.querySelectorAll('.checkbox'));
   const levers = Array.from(document.querySelectorAll('.lever'));
   const rocket = document.querySelector('.rocket');

   launchButton.disabled = true;
   launchButton.style.opacity = 0.5;

   let countChecks = 0;
   let countLevers = 0;

   Array.from(disabledInputs).forEach(el => {
      el.disabled = true;

   })

   enterPassButton.addEventListener('click', () => {
      if (inputField.value === 'TrustNo1') {
         inputField.disabled = true;
         enterPassButton.disabled = true;
         enterPassButton.style.opacity = 0.5;
         inputField.style.opacity = 0.5;
         Array.from(disabledInputs).forEach(el => {
            el.disabled = false;
         })
      }
   })

   function checkInputs() {
      if (countChecks === checkBoxes.length && countLevers === levers.length) {
         launchButton.disabled = false;
         launchButton.style.opacity = 1;
      }
   }

   checkBoxes.forEach(el => {
      el.addEventListener('change', () => {
         if (el.checked) {
            countChecks += 1;
         } else {
            countChecks -= 1;
         }
         checkInputs();
      })
   })

   levers.forEach(el => {
      el.addEventListener('change', () => {
         if (el.value === el.max) {
            countLevers += 1;
         } else {
            countLevers -= 1;
         }
         checkInputs();
      })
   })

   launchButton.addEventListener('click', () => {


      // const countdown = ['3...', '2...', '1...', 'LiftOff!'];

      // const countdown2 = {
      //    a: '3...',
      //    b: '2...',
      //    c: '1...',
      // }

      // let time = 0;

      // for (let index = 0; index < countdown.length; index++) {
      //    setTimeout(createTemplate(countdown[index]), time)
      //    time += 1000
      // }

      rocket.style.animation = `launchRocket 1.5s ease forwards`

   })


   // function createTemplate(text) {
   //    return `<h1>${text}</h1>`
   // }


}

