import TranslationLoader from './TranslationLoader';
import { sprintf } from 'sprintf-js';
import Config from '../Interfaces/Config';
import {LogManagerInterface} from '../Interfaces/Logger';

type TranslationResponse = string | null;
type TranslationParameters = string | number | object | CallableFunction;

class Translator
{
    private logger: LogManagerInterface;
    private config: Config;

    constructor(logger: LogManagerInterface, config: Config) {
        this.logger = logger;
        this.config = config;
    }

    /**
     * Translate
     * @param label
     * @param [parameters]
     * @param language
     * @returns Translated string on success or the provided label on failure
     */
    public _(
        label: string,
        parameters: TranslationParameters[] = [],
        language: string
    ): TranslationResponse {
        if (! language) {
            language = this.config.get('language', 'en');
        }

        if (! TranslationLoader.hasLanguage(language)) {
            this.logger.dev?.warn(`language is not supported`);

            return label;
        }

        const languagePack = TranslationLoader.get(language);

        if (! languagePack?.has(label.toLowerCase())) {
            this.logger.dev?.warn(`${label} is not present in the ${language} pack`);

            return label;
        }

        return sprintf(languagePack.get(label.toLowerCase())!, ...parameters);
    }
}

export default Translator;
