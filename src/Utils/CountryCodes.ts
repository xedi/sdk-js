import {codes} from '../Constants/CountryCodes'

class CountryCodes
{
    isValid(code: string) {

        const length = codes.length;
        for (let i = 0; i < length; i++) {
            if (codes[i] === code) return true;
        }
        return false;
    }

    getCodes() {
        return codes;
    }
}
export default CountryCodes;
