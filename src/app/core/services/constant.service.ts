import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  constructor() { }

  getConstant() {
    return '{ App: "TaskManager", Ver: "1.0" }';
  }
}

export const constantServInst = new ConstantService();
