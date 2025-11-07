import {getRequestConfig} from "next-intl/server"
import {routing} from './routing';

export default getRequestConfig(async ({locale}) =>{
    // Ensure locale is always defined and valid
    const validLocale = locale && routing.locales.includes(locale as (typeof routing.locales)[number])
        ? locale 
        : routing.defaultLocale;

    // fetch localized translation of the displayed content
    const messages = (await import(`../translations/${validLocale}.json`)).default

    return {
        locale: validLocale,
        messages,
    }
})