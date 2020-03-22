import { Injectable } from '@angular/core';
import { ConfigOptions } from '../models/config-options.model';

@Injectable()
export class ConfigOptionsService {
  options: ConfigOptions;
  constructor() { }
  setOptions(options: ConfigOptions) {
    this.options = options;
  }

  getOptions(): ConfigOptions {
    return this.options;
  }

}
