import { TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SubProjectComponentModule, SubProjectComponent } from 'subproject';
import { Version } from './version';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SubProjectComponentModule
      ],
      declarations: [
        AppComponent
      ],
    });
  });

  it('should render subproject component', async(() => {
    // require('subproject')//?
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const subproject = fixture.debugElement.query(By.directive(SubProjectComponent));
    expect(subproject.componentInstance.text).toBe('SUBPROJECT');
  }));

  it('should export project.json version number', () => {
    expect(Version).toBe('0.0.0');
  });
});
