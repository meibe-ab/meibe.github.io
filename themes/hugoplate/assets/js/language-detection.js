// themes/hugoplate/assets/js/language-detection.js
// Function to get the user's preferred language from the browser
function getUserLanguage() {
  const navigatorLanguage = window.navigator.language || window.navigator.userLanguage;
  return navigatorLanguage.toLowerCase();
}

// Check if the user's preferred language is Swedish
const userLanguage = getUserLanguage();
const isSwedishLanguage = userLanguage.includes("sv");

// Update language based on preference
if (isSwedishLanguage) {
  document.documentElement.lang = "sv-se"; // Set language to Swedish
  console.log('Language set to Swedish');
  if (window.location.pathname === "/") {
    window.location.pathname = "/sv/"; // Redirect to the Swedish homepage
  }
}


