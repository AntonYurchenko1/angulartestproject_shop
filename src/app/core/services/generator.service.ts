import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  constructor() { }

  generate(n: number): string {
      const charSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < n; i++) {
          const arrIndex = Math.floor(Math.random() * charSet.length);
          result += charSet.substring(arrIndex, arrIndex + 1);
      }
      return result;
  }
}
