import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandaStatus } from './demanda-status';

describe('DemandaStatus', () => {
  let component: DemandaStatus;
  let fixture: ComponentFixture<DemandaStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandaStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(DemandaStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
