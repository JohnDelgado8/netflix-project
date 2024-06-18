document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    document.getElementById("loading-screen").style.display = "none";
  }, 1000);
});

function updateContent(selectedLanguage) {
  const translations = {
    english: {
      questions: "Questions? Contact us.",
      faq: "FAQ",
      helpCenter: "Help Center",
      terms: "Term of Use",
      privacy: "Privacy",
      cookiePreferences: "Cookie Preferences",
      corporateInformation: "Corporate Information",
    },
    filipino: {
      questions: "May mga tanong? Kontakin kami.",
      faq: "Mga Katanungan",
      helpCenter: "Sentro ng Tulong",
      terms: "Mga Tuntunin ng Paggamit",
      privacy: "Pribadu",
      cookiePreferences: "Mga Pabor sa Cookies",
      corporateInformation: "Impormasyon ng Korporasyon",
    },
  };

  const selectedTranslations = translations[selectedLanguage];
  document.querySelector(".col.mt-4").textContent =
    selectedTranslations.questions;
  const links = document.querySelectorAll(".col-3 a");
  if (links.length >= 6) {
    links[0].textContent = selectedTranslations.faq;
    links[1].textContent = selectedTranslations.helpCenter;
    links[2].textContent = selectedTranslations.terms;
    links[3].textContent = selectedTranslations.privacy;
    links[4].textContent = selectedTranslations.cookiePreferences;
    links[5].textContent = selectedTranslations.corporateInformation;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateContent("english");
  const languageSelect = document.getElementById("language-select");
  languageSelect.addEventListener("change", function () {
    updateContent(languageSelect.value);
  });
});
