// This is whatsApp opening code
function openWhatsApp() {
  var countryCode = '91'; // Country code
  var phoneNumber = '9599872835'; // Phone number without country code
  var fullPhoneNumber = countryCode + phoneNumber;
  var message = encodeURIComponent("Hello, Thanks for connecting I am Urban Company, How may I help you");
  // Append the ID of the section to the WhatsApp URL
  window.open('https://wa.me/' + fullPhoneNumber + '?text=' + message + '#whatsappSection', '_blank');
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

