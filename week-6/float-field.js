export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        return isNaN(this.name);
    }

    getMessage() {
        return "<name> must be a float value. You entered <field>";
    }
}
