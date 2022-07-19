import {Injectable} from '@angular/core';
import {Iword} from "../model/iword";

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  private word: Iword[] = [
    {key: 'hello', meaning: 'xin chào'},
    {key: 'goodbye', meaning: 'tạm biệt'},
    {key: 'thank you', meaning: 'cảm ơn'},
    {key: 'nice to meet you', meaning: 'rất vui khi gặp bạn'},
    {key: 'fuck', meaning: 'd**'},
  ];

  constructor() {
  }

  // @ts-ignore
  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.word.find(item => item.key === word.toLocaleLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not Found';
  }
}
