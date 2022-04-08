import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooklistingComponent } from './booklisting.component';

describe('BooklistingComponent', () => {
  let component: BooklistingComponent;
  let fixture: ComponentFixture<BooklistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooklistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
