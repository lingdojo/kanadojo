import {getRequestConfig} from "next-intl/server"

export default getRequestConfig(async () =>{
    // mock locale settings
    const locale = 'es';

    // fetch localized translation of the displayed content
    const messages= (await import(`../translations/${locale}.json`)).default

    return  {
        locale,
        messages,
    }
})