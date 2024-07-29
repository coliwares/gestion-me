import { TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HomePage } from './home.page';
import { LevelService } from '../services/level.service';
import { of } from 'rxjs';
import { Level } from '../models/level.interface';
import { ComponentFixture } from '@angular/core/testing';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let levelService: LevelService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot(), HttpClientTestingModule],
      providers: [LevelService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    levelService = TestBed.inject(LevelService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize levels on ngOnInit', () => {
    const levels: Level[] = [{ id: 1, name: 'Level 1', description: 'descripcion 1' }, { id: 2, name: 'Level 2', description: 'descripcion 2' }];
    spyOn(levelService, 'getLevels').and.returnValue(of(levels));

    component.ngOnInit();

    expect(component.levels).toEqual(levels);
  });
});
