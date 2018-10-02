import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'reverse'
})

export class ReversePipe implements PipeTransform {
    transform(value:any){
        const splitString: string[] = value.split("");
        return splitString.reverse().join("");
    }
}