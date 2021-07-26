class MyCredits {
    private value: any

    constructor() {
        this.value = {
            valeCredit: 0,
            cashBack: 0
        }
    }

    public getValeCredit(): void {
        this.value.valeCredit = 100
    }

    public getCashback(): void {
        this.value.cashBack = 100
    }

    public getTotalValues(): object {
        return {
            cashBack: this.value.cashBack,
            valeCredit: this.value.valeCredit,
            total: (this.value.cashBack + this.value.valeCredit)
        }
    }
}

const credits = new MyCredits

credits.getValeCredit()
credits.getCashback()

console.log(credits.getTotalValues())