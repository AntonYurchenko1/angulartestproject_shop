import { Injectable } from '@angular/core';


@Injectable()
export class LocalStorageService {

  constructor() { }

  setItem(key: string, value: string): void {
      window.localStorage[key] = value;
  }

  setObject(key: string, value: object): void {
    window.localStorage[key] = JSON.stringify(value);
  }

  getItem(key: string): string {
    return window.localStorage[key];
  }

  getObject(key: string): object {
    return JSON.parse(window.localStorage[key] || '{}');
  }

  removeItem(key: string): void {
     window.localStorage.removeItem(key);
  }
}
