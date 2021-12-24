import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcryptoComponent } from './editcrypto.component';

describe('EditcryptoComponent', () => {
  let component: EditcryptoComponent;
  let fixture: ComponentFixture<EditcryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
