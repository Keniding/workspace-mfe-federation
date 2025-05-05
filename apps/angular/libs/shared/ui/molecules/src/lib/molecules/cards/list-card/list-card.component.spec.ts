import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCardComponent } from './list-card.component';

describe('ListCardComponent', () => {
  let component: ListCardComponent<string>;
  let fixture: ComponentFixture<ListCardComponent<string>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListCardComponent<string>);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
