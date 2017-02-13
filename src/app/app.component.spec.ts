/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppModule]
    });
    TestBed.compileComponents();

    this.fixture = TestBed.createComponent(AppComponent);
    this.app = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(this.app).toBeTruthy();
  }));

  it(`should have as title 'Game Store'`, async(() => {
    expect(this.app.title).toEqual('Game Store');
  }));

  it('should render title in a h1 tag', async(() => {
    const compiled = this.fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Game Store');
  }));
});
