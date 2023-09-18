const i18nConfig = {
  locales: ["en", "nl"],
  defaultLocale: "en",
  localeDetector: false,
  // localeDetector: (request, config) => {

  //   const pathname = request.nextUrl.pathname
  //   const pathnameIsMissingLocale = locales.every(
  //     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  //   )

  //   // your custom locale detection logic
  //   return 'the-locale';
  // }
};

module.exports = i18nConfig;
