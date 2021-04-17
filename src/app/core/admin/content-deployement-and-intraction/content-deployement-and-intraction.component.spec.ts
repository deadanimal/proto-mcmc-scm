import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDeployementAndIntractionComponent } from './content-deployement-and-intraction.component';

describe('ContentDeployementAndIntractionComponent', () => {
  let component: ContentDeployementAndIntractionComponent;
  let fixture: ComponentFixture<ContentDeployementAndIntractionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDeployementAndIntractionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDeployementAndIntractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
