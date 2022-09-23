import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// arabic
import ArabicHeader from "./translations/langs/ar/header.json";
import ArabicFooter from "./translations/langs/ar/footer.json";
import ArabicHome from "./translations/langs/ar/home.json";
import ArabicSignInPage from "./translations/langs/ar/signInPage.json";
import ArabicSignUpPage from "./translations/langs/ar/signUpPage.json";
import ArabicAdminDashboard from "./translations/langs/ar/adminDashboard.json";

// english
import EnglishHeader from "./translations/langs/en/header.json";
import EnglishFooter from "./translations/langs/en/footer.json";
import EnglishHome from "./translations/langs/en/home.json";
import EnglishSignInPage from "./translations/langs/en/signInPage.json";
import EnglishSignUpPage from "./translations/langs/en/signUpPage.json";
import EnglishAdminDashboard from "./translations/langs/en/adminDashboard.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          home: EnglishHome,
          header: EnglishHeader,
          footer: EnglishFooter,
          signInPage: EnglishSignInPage,
          signUpPage: EnglishSignUpPage,
          adminDashboard: EnglishAdminDashboard,
        },
      },
      ar: {
        translation: {
          home: ArabicHome,
          header: ArabicHeader,
          footer: ArabicFooter,
          signInPage: ArabicSignInPage,
          signUpPage: ArabicSignUpPage,
          adminDashboard: ArabicAdminDashboard,
        },
      },
    },
  });

export default i18n;
