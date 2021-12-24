import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecryptoComponent } from './createcrypto.component';

describe('CreatecryptoComponent', () => {
  let component: CreatecryptoComponent;
  let fixture: ComponentFixture<CreatecryptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecryptoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatecryptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
