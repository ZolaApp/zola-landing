const isEnabledLocale = (enabledLocales = [], locale) =>
  !!enabledLocales.find(({ code }) => code === locale)

export default isEnabledLocale
