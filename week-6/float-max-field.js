export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        if (parseFloat(this.field) < this.max) {
            return true;
        } else {
            return false;
        }
    }

    getMessage() {
        return "<name> must be less than max. You entered <field>";
    }
}
