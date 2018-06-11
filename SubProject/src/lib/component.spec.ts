import { TestBed, async } from '@angular/core/testing';
import { SubProjectComponent } from './component';

describe('SubProjectComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SubProjectComponent
      ],
    });
  });
  it('should create the component', () => {
    const fixture = TestBed.createComponent(SubProjectComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'SUBPROJECT'`, () => {
    const fixture = TestBed.createComponent(SubProjectComponent);
    const component = fixture.debugElement.componentInstance;
    expect(component.text).toEqual('SUBPROJECT');
  });
});
