import {getRequestConfig} from "next-intl/server"
import {routing} from './routing';

/**
 * List of translation namespaces
 * Each namespace corresponds to a JSON file in locales/{lang}/
 */
const NAMESPACES = [
    'common',
    'navigation',
    'kana',
    'kanji',
    'vocabulary',
    'achievements',
    'statistics',
    'settings',
    'errors',
    'menuInfo'
] as const;

export default getRequestConfig(async ({locale}) =>{
    // Ensure locale is always defined and valid
    const validLocale = locale && routing.locales.includes(locale as (typeof routing.locales)[number])
        ? locale 
        : routing.defaultLocale;

    // Load all namespace translations for the locale
    const messages: Record<string, any> = {};
    
    for (const namespace of NAMESPACES) {
        try {
            const namespaceMessages = (await import(`./locales/${validLocale}/${namespace}.json`)).default;
            messages[namespace] = namespaceMessages;
        } catch (error) {
            console.error(`Failed to load namespace "${namespace}" for locale "${validLocale}":`, error);
            // Continue loading other namespaces even if one fails
        }
    }

    return {
        locale: validLocale,
        messages,
    }
})