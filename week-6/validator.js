import { RequiredField } from "./required-field";
import { FloatField } from "./float-field";
import { FloatMinField } from "./float-min-field";
import { FloatMaxField } from "./float-max-field";

this.validators = [];
this.messages = [];

constructor(name, field);

function addRequiredField() {
    this.validators.push(new RequiredField(this.name, this.field));
}

function addRequiredFloatField() {
    this.validators.push(new FloatField(this.name, this.field));
}

function addFloatMinField(min) {
    this.validators.push(new FloatMinField(this.name, this.field, min));
}

function addFloatMaxField(max) {
    this.validators.push(new FloatMaxField(this.name, this.field, max));
}


/* I need to look into this more... 
function validate() {
    for (validators of validate
}