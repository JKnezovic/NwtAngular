import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteContainerComponent } from './favorite-container.component';

describe('FavoriteContainerComponent', () => {
  let component: FavoriteContainerComponent;
  let fixture: ComponentFixture<FavoriteContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoriteContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
