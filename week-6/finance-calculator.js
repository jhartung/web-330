export class FinanceCalculator {
    static MONTHS_IN_YEARS = 12;

    static calculateFutureValue(monthlyPayment, rate, years) {
        let month = years * this.MONTHS_IN_YEARS;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * month;
        let futureValue = presentValue * Math.pow(interestRate, months);
        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" });
        return currencyFormatter.format(field);
    }
}
