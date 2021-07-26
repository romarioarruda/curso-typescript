var MyCredits = /** @class */ (function () {
    function MyCredits() {
        this.value = {
            valeCredit: 0,
            cashBack: 0
        };
    }
    MyCredits.prototype.getValeCredit = function () {
        this.value.valeCredit = 100;
    };
    MyCredits.prototype.getCashback = function () {
        this.value.cashBack = 100;
    };
    MyCredits.prototype.getTotalValues = function () {
        return {
            cashBack: this.value.cashBack,
            valeCredit: this.value.valeCredit,
            total: (this.value.cashBack + this.value.valeCredit)
        };
    };
    return MyCredits;
}());
var credits = new MyCredits;
credits.getValeCredit();
credits.getCashback();
console.log(credits.getTotalValues());
