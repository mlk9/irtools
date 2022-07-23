export class Convertor {

    private static persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
    private static arabic = ['٩', '٨', '٧', '٦', '٥', '٤', '٣', '٢', '١', '٠']
    private static english = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']


    static toEnNumbers(text: string): string {

        this.english.forEach((item, index) => {
            for (let i = 0; i < text.length; i++) {

                text = text.replace(this.persian[index], item)
                text = text.replace(this.arabic[index], item)

            }
        })

        return text
    }

    static toFaNumbers(text: string): string {

        this.persian.forEach((item, index) => {
            for (let i = 0; i < text.length; i++) {

                text = text.replace(this.english[index], item)
                text = text.replace(this.arabic[index], item)

            }
        })

        return text
    }

    static toArNumbers(text: string): string {

        this.arabic.forEach((item, index) => {
            for (let i = 0; i < text.length; i++) {

                text = text.replace(this.persian[index], item)
                text = text.replace(this.english[index], item)

            }
        })

        return text
    }

    static toToman(value:number) : number
    {
        return value/10
    }

    static toRial(value:number) : number
    {
        return value*10
    }


    static toDescribe(value:number) : number
    {
        //M
        return value*10
    }
    
}