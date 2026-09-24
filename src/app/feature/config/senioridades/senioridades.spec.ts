import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Senioridades } from './senioridades';

describe('Senioridades', () => {
  let component: Senioridades;
  let fixture: ComponentFixture<Senioridades>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Senioridades],
    }).compileComponents();

    fixture = TestBed.createComponent(Senioridades);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
