import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConferenceApp } from './app.component';
import {
  PlatformMock,
  StatusBarMock,
  SplashScreenMock
} from 'ionic-mocks';

describe('ConferenceApp Component', () => {
  let fixture;
  let component: ConferenceApp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConferenceApp],
      imports: [
        IonicModule.forRoot(ConferenceApp)
      ],
      providers: [
        { provide: StatusBar, useFactory: StatusBarMock.instance() },
        { provide: SplashScreen, useFactory: SplashScreenMock.instance() },
        { provide: Platform, useFactory: PlatformMock.instance() }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConferenceApp);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component instanceof ConferenceApp).toBe(true);
  });

});
