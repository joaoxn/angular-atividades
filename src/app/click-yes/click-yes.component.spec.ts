import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickYesComponent } from './click-yes.component';

describe('ClickYesComponent', () => {
  let component: ClickYesComponent;
  let fixture: ComponentFixture<ClickYesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickYesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickYesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
