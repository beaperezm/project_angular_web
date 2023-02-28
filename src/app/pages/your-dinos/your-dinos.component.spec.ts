import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourDinosComponent } from './your-dinos.component';

describe('YourDinosComponent', () => {
  let component: YourDinosComponent;
  let fixture: ComponentFixture<YourDinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourDinosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourDinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
