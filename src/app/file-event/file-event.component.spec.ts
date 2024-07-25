import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileEventComponent } from './file-event.component';

describe('FileEventComponent', () => {
  let component: FileEventComponent;
  let fixture: ComponentFixture<FileEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FileEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
