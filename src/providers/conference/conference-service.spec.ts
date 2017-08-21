import { inject, TestBed } from '@angular/core/testing';
import { Events } from 'ionic-angular';

// PROVIDERS
import { ConferenceHttpService } from './conference-http-service';
import { ConferenceHttpServiceMock } from './mock-conference-http-service';
import { IonicStorageModule } from '@ionic/storage';
import { UserData } from '../user-data';

// SERVICE BEING TESTED
import { ConferenceService } from './conference-service';

let service: ConferenceService;

describe('Conference Service', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [
        IonicStorageModule.forRoot()
      ],
      providers: [
        ConferenceService,
        { provide: ConferenceHttpService, useClass: ConferenceHttpServiceMock },
        Events,
        UserData
      ]
    })
  });

  beforeEach(inject([ConferenceService], (serv: ConferenceService) => {
    service = serv;
  }));

  it('should be created', () => {
    expect(service).toBeDefined();
    expect(service instanceof ConferenceService).toBeTruthy();
  });

});
