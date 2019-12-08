import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authenticationPipe'
})
export class AuthenticationPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
