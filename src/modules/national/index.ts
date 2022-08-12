import { Convertor } from "../convertor"
import lang from '../../lang/en.json'

export class National {

    static isNationalNumber(text: string): boolean {

        text = Convertor.toEnNumbers(text.toString())

        if (typeof text !== 'string') {
            throw new SyntaxError(lang.parameter_must_be_string)
        }

        if (text === "0123456789") {
            return false
        }
        
        if ((/^[0-9]{10}$/g).test(text) === false) {
            return false
        }

        for (let index = 0; index < 10; index++) {
            if (text.match(`/^${index}{10}$/g`)) {
                return false
            }
        }
        
        let sum = 0
        for (let index = 0; index < 9; index++) {
           sum += ((10 - index) * parseInt(text.substring(index,index+1)))
        }

        const ret = sum%11
        const parity = parseInt(text.substring(9,10))

        if ((ret < 2 && ret === parity) || (ret >= 2 && ret === 11 - parity))
        {
            return true
        }
            
        return false
    }

    static isPostCode(text: string | number): boolean {

        text = Convertor.toEnNumbers(text.toString())

        const pattern = /\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/gm;
        if(pattern.test(text) === false)
        {
            return false
        }
        return true
    }

    static isPhoneNumber(phone: string | number): boolean {

        phone = Convertor.toEnNumbers(phone.toString())

        const pattern = /^(\+989|0989|989|09|9)(\d{9})$/gm;
        if(pattern.test(phone) === false)
        {
            return false
        }
        return true
    }

    static isJalaliDate(date: string | number): boolean {
        
        date = Convertor.toEnNumbers(date.toString())

        let result : boolean = false
        const patterns : RegExp[] = [
            /^([1-5][0-9][0-9]|1[1-5][0-9][0-9]|[0-9][0-9])[\/|\-|\.|\0](1[0-2]|0[1-9]|[1-9])[\/|\-|\.|\0](3[0-2]|2[0-9]|1[0-9]|0[1-9]|[1-9])$/g,
            /^([1-5][0-9][0-9]|1[1-5][0-9][0-9]|[0-9][0-9])(1[0-2]|0[1-9]|[1-9])(3[0-2]|2[0-9]|1[0-9]|0[1-9]|[1-9])$/g,
            /^(3[0-2]|2[0-9]|1[0-9]|0[1-9]|[1-9])[\/|\-|\.|\0](1[0-2]|0[1-9]|[1-9])[\/|\-|\.|\0]([1-5][0-9][0-9]|1[1-5][0-9][0-9]|[0-9][0-9])$/g,
            /^(3[0-2]|2[0-9]|1[0-9]|0[1-9]|[1-9])(1[0-2]|0[1-9]|[1-9])([1-5][0-9][0-9]|1[1-5][0-9][0-9]|[0-9][0-9])$/g,
        ]
        patterns.forEach(pattern => {
            if(pattern.test(date.toString()) === true)
            {
                result = true
            }
        })
        
        return result
    }

    

}