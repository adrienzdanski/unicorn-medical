import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import {IconLabelComponent} from './icon-label.component';
import {By} from '@angular/platform-browser';

describe('IconLabelComponent', () => {
  let component: IconLabelComponent;
  let fixture: ComponentFixture<IconLabelComponent>;
  let element, debug;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IconLabelComponent ],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconLabelComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render icon label', waitForAsync(() => {
    component.icon = 'fa-test';
    component.label = 'test label';
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(element.querySelector('span').innerText).toBe('test label');
      const icon: HTMLElement = debug.query(By.css('i')).nativeElement;
      expect(icon.classList).toContain('fa-test');
      expect(icon.classList).toContain('fa-2x');
    });

  }));
});
