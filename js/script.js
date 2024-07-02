// This is whatsApp opening code
function openWhatsApp() {
// Comment the message section to show whatsapp chat without message
var message = encodeURIComponent("Hi! I am interested in getting a scooty.");

// use below code to show whatsapp chat with message
window.open('https://api.whatsapp.com/send/?phone=919599872835&type=phone_number&app_absent=0&text=' + message + '#whatsappSection', '_blank');

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

