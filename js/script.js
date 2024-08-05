// This is whatsApp opening code
function openWhatsApp(phoneNumber) {
// Comment the message section to show whatsapp chat without message
var message = encodeURIComponent("Hi! I am interested in getting a scooty.");

// use below code to show whatsapp chat with message
// window.open('https://api.whatsapp.com/send/?phone=919599872835&type=phone_number&app_absent=0&text=' + message + '#whatsappSection', '_blank');

// for multiple numbers
window.open('https://api.whatsapp.com/send/?phone=' + phoneNumber + '&type=phone_number&app_absent=0&text=' + message + '#whatsappSection', '_blank');

// use below code to show whatsapp chat without message
// window.open('https://api.whatsapp.com/send/?phone=919599872835&type=phone_number&app_absent=0' + '#whatsappSection', '_blank');
}


// This page scroll code on navigation link click
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}


// This is backtotop code
window.addEventListener('scroll', function() {
  document.body.classList.toggle('scrolled', window.scrollY > 0);
});




// document.getElementById('openDropDown').addEventListener('click', function() {
//   var menuContent = document.getElementById('menuContent');
//   if (menuContent.classList.contains('show')) {
//       menuContent.classList.remove('show');
//       setTimeout(function() {
//           menuContent.style.display = 'none';
//       }, 300); // Match this duration to the CSS transition duration
//   } else {
//       menuContent.style.display = 'block';
//       setTimeout(function() {
//           menuContent.classList.add('show');
//       }, 10); // Small delay to ensure display:block is applied before the opacity transition

//        // Automatically close the menu after 3 seconds
//        setTimeout(function() {
//         menuContent.classList.remove('show');
//         setTimeout(function() {
//             menuContent.style.display = 'none';
//         }, 500); // Match this duration to the CSS transition duration
//     }, 3000); // Close after 3 seconds
//   }
// });

document.querySelectorAll('.openDropDown').forEach(button => {
  button.addEventListener('click', function() {
      var targetId = this.getAttribute('data-target');
      var menuContent = document.getElementById(targetId);

      if (menuContent.classList.contains('show')) {
          menuContent.classList.remove('show');
          setTimeout(function() {
              menuContent.style.display = 'none';
          }, 500); // Match this duration to the CSS transition duration
      } else {
          menuContent.style.display = 'block';
          setTimeout(function() {
              menuContent.classList.add('show');
          }, 10); // Small delay to ensure display:block is applied before the opacity transition

          // Automatically close the menu after 3 seconds
          // setTimeout(function() {
          //     menuContent.classList.remove('show');
          //     setTimeout(function() {
          //         menuContent.style.display = 'none';
          //     }, 500); // Match this duration to the CSS transition duration
          // }, 5000); // Close after 3 seconds
      }
  });
});
