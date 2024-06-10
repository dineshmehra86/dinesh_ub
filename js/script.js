// This is whatsApp opening code
function openWhatsApp() {
  // Replace '1234567890' with the phone number you want to open WhatsApp with
  var phoneNumber = '9599872835';
  var welcomeMessage = encodeURIComponent("Hello, Thanks for connecting I am Atul, How may I help you");
  window.open('https://wa.me/' + phoneNumber + '?text=' + welcomeMessage, '_blank');
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

