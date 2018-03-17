import { Pipe ,PipeTransform } from '@angular/core';


@Pipe({
    name :'replaceToSpace'
})
export class CustomPipes implements PipeTransform {

    transform(value :string,character:string) : string {

console.log(value.replace(character,'~'))  ;
      return value.replace(character,'~');
    }
}