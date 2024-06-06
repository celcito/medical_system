//https://github.com/typestack/class-validator?tab=readme-ov-file#custom-validation-decorators


import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
  } from 'class-validator';
  
  @ValidatorConstraint({ async: true })
  export class IsUserAlreadyExistConstraint implements ValidatorConstraintInterface {
    validate(value: string ) {
  
        if (typeof value!== 'string') {
          return false;
        }

        
    
        const regex = /^(?=.*[0-9])(?=.*[-=!@#$%^&*()\_\+\=\[\];:|{}'",.<>?]).{8,}$/;
        return regex.test(value);


    }
  }
  
  export function PasswordComplexity(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsUserAlreadyExistConstraint,
      });
    };
  }