import { Pipe, PipeTransform } from '@angular/core';
import { transliterate } from 'transliteration';

@Pipe({
  name: 'transliterate'
})
export class TransliteratePipe implements PipeTransform {

  transform(value: string, ignore?: string[]): string {
    return transliterate(value, {ignore: ignore});
  }

}
