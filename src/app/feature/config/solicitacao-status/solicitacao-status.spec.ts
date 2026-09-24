import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SolicitacaoStatus } from './solicitacao-status';

describe('SolicitacaoStatus', () => {
  let component: SolicitacaoStatus;
  let fixture: ComponentFixture<SolicitacaoStatus>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitacaoStatus],
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitacaoStatus);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
