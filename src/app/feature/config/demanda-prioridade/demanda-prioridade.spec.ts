import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemandaPrioridade } from './demanda-prioridade';

describe('DemandaPrioridade', () => {
  let component: DemandaPrioridade;
  let fixture: ComponentFixture<DemandaPrioridade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandaPrioridade],
    }).compileComponents();

    fixture = TestBed.createComponent(DemandaPrioridade);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
