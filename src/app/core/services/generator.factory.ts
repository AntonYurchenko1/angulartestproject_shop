import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const RandomString32 = new InjectionToken<string>('RandomString32');

export function RandomStringNFactory(n: number) {
  return (data: GeneratorService): string =>
    data.generate(n);
}
