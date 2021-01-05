import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwoPage } from './two.page';

describe('TwoPage', () => {
  let component: TwoPage;
  let fixture: ComponentFixture<TwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
