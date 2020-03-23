import { Component, OnInit, Inject, Optional, HostListener } from '@angular/core';
import { ConfigOptionsService, ConstantService, constantServInst, LocalStorageService } from '../../../core/services';
import { GeneratorService, RandomStringNFactory, RandomString32 } from '../../../core/services';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [
    GeneratorService,
    { provide: RandomString32, useFactory: RandomStringNFactory(32), deps: [GeneratorService] },
    { provide: ConstantService, useValue: constantServInst },
    { provide: LocalStorageService, useClass: LocalStorageService },
    ConfigOptionsService
  ]
})
export class AboutComponent implements OnInit {

  constructor(
    @Inject(RandomString32) private randomString32: string,
    private constant: ConstantService,
    @Optional() private storage: LocalStorageService,
    private options: ConfigOptionsService
  ) { }

  testDblClick: boolean;


  ngOnInit(): void {
    this.testDblClick = true;
  }

}
