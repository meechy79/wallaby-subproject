import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SubProjectComponent } from 'subproject';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SubProjectComponent
      ],
    });
  });

  it('should render suproect component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const subproject = fixture.debugElement.query(By.directive(SubProjectComponent));
    expect(subproject.componentInstance.text).toBe('SUBPROJECT');
  }));
});
