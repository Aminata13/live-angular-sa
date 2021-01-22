import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeleft'
})
export class TimeLeftPipe implements PipeTransform {

  transform(value: Date): string {
    const currentDate = new Date();
    const diff = currentDate.getTime() - value.getTime();
    const year = diff/1000/60/60/24/365;
    if(year>0) return year + 'a';

    let days = diff/1000/60/60/24;
    if(days>0) return days + 'j';

    let hours = (diff/1000/60/60)%24;
    if(hours>0) return hours + 'h';

    let minutes = (diff/1000/60)%60;
    if(minutes>0) return minutes + 'mn';

    let secondes = (diff/1000)%60;
    if(secondes>0) return secondes + 's';

    return '1s';
  }

}
