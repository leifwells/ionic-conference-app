import { async, TestBed } from '@angular/core/testing';
import { IonicModule, Platform } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// PROVIDERS
import { ConferenceService } from '../providers/conference/conference-service';
import { ConferenceHttpService } from '../providers/conference/conference-http-service';
import { ConferenceHttpServiceMock } from '../providers/conference/mock-conference-http-service';
import { IonicStorageModule } from '@ionic/storage';
import { UserData } from '../providers/user-data';

import { ConferenceApp } from './app.component';
import {
  PlatformMock, SplashScreenMock, StatusBarMock
} from 'ionic-mocks';


describe('ConferenceApp Component', () => {
  let fixture;
  let component: ConferenceApp;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConferenceApp],
      imports: [
        IonicModule.forRoot(ConferenceApp),
        IonicStorageModule.forRoot()
      ],
      providers: [
        ConferenceService,
        { provide: ConferenceHttpService, useClass: ConferenceHttpServiceMock },
        { provide: Platform, useFactory: () => PlatformMock.instance() },
        { provide: SplashScreen, useFactory: () => SplashScreenMock.instance() },
        { provide: StatusBar, useFactory: () => StatusBarMock.instance() },
        UserData
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
