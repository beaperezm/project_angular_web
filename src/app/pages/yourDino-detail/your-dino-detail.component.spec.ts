import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDinoDetailComponent } from './your-dino-detail.component';

describe('YourDinoDetailComponent', () => {
  let component: YourDinoDetailComponent;
  let fixture: ComponentFixture<YourDinoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourDinoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourDinoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
