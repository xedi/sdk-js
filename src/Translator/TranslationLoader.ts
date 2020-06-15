import * as English from '@xedi/translations/dist/en.collapse.json';

const SUPPORTED_LANGUAGES = new Map<string, LanguagePack>([
    [
        'en',
        new Map<string, string>(Object.entries(English))
    ]
]);

type LanguagePack = Map<string, string>;

class TranslationLoader
{
    /**
     * Determines whether the provided language is supported
     * @param language
     * @returns true if language is supported
     */
    public static hasLanguage(language: string): boolean
    {
        return SUPPORTED_LANGUAGES.has(language);
    }

    /**
     * Gets a LanguagePack
     * @param language
     * @returns LanguagePack if supported
     */
    public static get(language: string): LanguagePack | undefined
    {
        if (! this.hasLanguage(language)) {
            return;
        }

        return SUPPORTED_LANGUAGES.get(language);
    }

}

export default TranslationLoader;
