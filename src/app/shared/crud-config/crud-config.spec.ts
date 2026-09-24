import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrudConfig } from './crud-config';

describe('CrudConfig', () => {
  let component: CrudConfig;
  let fixture: ComponentFixture<CrudConfig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudConfig],
    }).compileComponents();

    fixture = TestBed.createComponent(CrudConfig);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
