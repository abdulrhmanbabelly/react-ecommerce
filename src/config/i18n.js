import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
// arabic
import ArabicAdminDashboard from "./translations/langs/ar/adminDashboard.json";
import ArabicCart from "./translations/langs/ar/cart.json";
import ArabicFooter from "./translations/langs/ar/footer.json";
import ArabicHeader from "./translations/langs/ar/header.json";
import ArabicHome from "./translations/langs/ar/home.json";
import ArabicSignInPage from "./translations/langs/ar/signInPage.json";
import ArabicSignUpPage from "./translations/langs/ar/signUpPage.json";

// english
import EnglishAdminDashboard from "./translations/langs/en/adminDashboard.json";
import EnglishCart from "./translations/langs/en/cart.json";
import EnglishFooter from "./translations/langs/en/footer.json";
import EnglishHeader from "./translations/langs/en/header.json";
import EnglishHome from "./translations/langs/en/home.json";
import EnglishSignInPage from "./translations/langs/en/signInPage.json";
import EnglishSignUpPage from "./translations/langs/en/signUpPage.json";

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
          adminDashboard: EnglishAdminDashboard,
          cart: EnglishCart,
          footer: EnglishFooter,
          header: EnglishHeader,
          home: EnglishHome,
          signInPage: EnglishSignInPage,
          signUpPage: EnglishSignUpPage,
        },
      },
      ar: {
        translation: {
          adminDashboard: ArabicAdminDashboard,
          cart: ArabicCart,
          header: ArabicHeader,
          footer: ArabicFooter,
          home: ArabicHome,
          signInPage: ArabicSignInPage,
          signUpPage: ArabicSignUpPage,
        },
      },
    },
  });
localStorage.setItem('language', i18n.language);
export default i18n;
