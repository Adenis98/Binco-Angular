import { AbstractControl, FormControl, ValidationErrors } from "@angular/forms";


export class CustomValid {
    static onlyLetters(control : AbstractControl ):ValidationErrors | null  
    {
        let text = control.value ; 
        for(let i=0;i<text.length ; i++)
            if((text[i]<'a'||text[i]>'z')&&(text[i]<'A'||text[i]>'Z'))
                return {onlyLetters : true};
        return null ; 
    }
    static cannotContainSpace(control : AbstractControl): ValidationErrors | null
    {
        let text = control.value ; 
        return (text.indexOf(' ')>=0)?{cannotContainSpace : true}: null;
    }
    static emailDomainName(control : AbstractControl):ValidationErrors | null 
    {
        let text = control.value ; 
        return (text.substr(text.indexOf('@'),text.length-text.indexOf('@')).indexOf('.')<0)?{emailDomainName : true }:null ;  
    }
   
}