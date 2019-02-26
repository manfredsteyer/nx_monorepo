import { async, TestBed } from '@angular/core/testing';
import { PassengerApiModule } from './passenger-api.module';

describe('PassengerApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PassengerApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PassengerApiModule).toBeDefined();
  });
});
