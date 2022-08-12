import { Convertor } from "../convertor"
import { banksData } from "./data"
import { Bank } from "./types/BankType"
import lang from '../../lang/en.json'

export class IrBank {

    protected static banks : Bank[]

    static getBankName(input: string | number) : string {

        this.banks = banksData

        if(typeof input !== 'string' && typeof input !== 'number')
        {
            throw new SyntaxError(lang.parameter_must_be_string_number)
        }

        let num : string = input.toString()
        let bankName : string = ''

        if(typeof input === "number")
        {
            num = input.toString()
        }

        if(this.isCard(num)) 
        {
            this.banks.forEach(bank => {
                bank.card.forEach(item => {
                    if(item.toString() === num.substring(0,6))
                    {
                        bankName = bank.name
                    }
                })
            })

            if(bankName==='')
            {
                throw new Error(lang.bank_not_found)
            }
        }else if(this.isIBan(num)) 
        {
            this.banks.forEach(bank => {
                bank.iban.forEach(item => {
                    if(item.toString() === num.substring(5,7))
                    {
                        bankName = bank.name
                    }
                })
            })

            if(bankName==='')
            {
                throw new Error(lang.bank_not_found)
            }
        }else{
            throw new Error(lang.parameter_must_be_iBan_card)
        }

        return bankName
    }

    

    static isCard(card : number | string) : boolean {

        if(typeof card !== 'string' && typeof card !== 'number')
        {
            throw new SyntaxError(lang.parameter_must_be_string_number)
        }

        if(typeof card === "number")
        {
            card = card.toString()
        }

        card = Convertor.toEnNumbers(card)

        if(card.length != 16)
        {
            return false
        }

        const passKey : number[] = [2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1]
        let sum: number = 0
        card.split('').forEach((number, index) => {
            const row = parseInt(number)*passKey[index];
            sum += row>9 ? row-9 : row
        })

        if(sum%10 !== 0 ){
            return false
        }

        return true
    }

    static isIBan(iban : string) : boolean
    {
        if(typeof iban !== 'string')
        {
            throw new SyntaxError(lang.parameter_must_be_string)
        }

        iban = iban.toUpperCase()

        iban = Convertor.toEnNumbers(iban)

        if(iban.length != 26)
        {
            return false
        }
        

        if (iban.substring(0,2)!="IR") {
            return false
        }

        const IRIBan : number = 1827

        const formula = `${iban.substring(4,26)}${IRIBan}${iban.substring(2,4)}`

        let formuLaCheck = parseInt(formula.substring(0,1))

        for (let i = 1; i < formula.length; i++) {
            formuLaCheck *= 10
            formuLaCheck += parseInt(formula.substring(i,i+1))
            formuLaCheck %= 97
        }
        return formuLaCheck === 1
    }
}


