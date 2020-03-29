import { Injectable } from '@angular/core';
import { ConfigOptions } from '../models/config-options.model';

@Injectable()
export class ConfigOptionsService {
  options: ConfigOptions;
  constructor() { }
  setOptions(options: ConfigOptions) {
    this.options = options; // это будет перезапись, желательно добавлять
    // свойства так, чтобы существующие перезаписывались, новые добавлялись, не измененные оставались
  }

  getOptions(): ConfigOptions {
    return this.options;
  }

}
