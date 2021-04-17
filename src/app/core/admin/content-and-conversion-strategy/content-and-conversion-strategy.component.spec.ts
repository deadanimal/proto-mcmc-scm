import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAndConversionStrategyComponent } from './content-and-conversion-strategy.component';

describe('ContentAndConversionStrategyComponent', () => {
  let component: ContentAndConversionStrategyComponent;
  let fixture: ComponentFixture<ContentAndConversionStrategyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentAndConversionStrategyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentAndConversionStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
