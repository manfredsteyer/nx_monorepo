import { async, TestBed } from '@angular/core/testing';
import { FlightApiModule } from './flight-api.module';

describe('FlightApiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FlightApiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(FlightApiModule).toBeDefined();
  });
});
