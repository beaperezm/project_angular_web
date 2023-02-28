import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDinoComponent } from './create-dino.component';

describe('CreateDinoComponent', () => {
  let component: CreateDinoComponent;
  let fixture: ComponentFixture<CreateDinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateDinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
