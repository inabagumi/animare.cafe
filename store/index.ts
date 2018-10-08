export const state = () => ({
  locale: 'en',
  locales: ['en', 'ja'],
})

export const mutations = {
  SET_LOCALE(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  }
}