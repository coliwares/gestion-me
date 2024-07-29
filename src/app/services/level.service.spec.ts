import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LevelService } from './level.service';

describe('LevelService', () => {
  let service: LevelService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LevelService]
    });
    service = TestBed.inject(LevelService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all levels', () => {
    const mockLevels = [{ id: 1, name: 'Level 1' }, { id: 2, name: 'Level 2' }];

    service.getLevels().subscribe(levels => {
      expect(levels).toEqual(mockLevels);
    });

    const req = httpMock.expectOne('http://localhost:3000/levels');
    expect(req.request.method).toBe('GET');
    req.flush(mockLevels);
  });

  it('should retrieve a level by ID', () => {
    const mockLevel = { id: 1, name: 'Level 1' };
    const levelId = 1;

    service.getLevelById(levelId).subscribe(level => {
      expect(level).toEqual(mockLevel);
    });

    const req = httpMock.expectOne(`http://localhost:3000/levels/${levelId}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockLevel);
  });

  it('should add a new level', () => {
    const mockLevel = { name: 'New Level' };

    service.addLevel(mockLevel).subscribe(response => {
      expect(response).toEqual(mockLevel);
    });

    const req = httpMock.expectOne('http://localhost:3000/levels');
    expect(req.request.method).toBe('POST');
    req.flush(mockLevel);
  });

  it('should update an existing level', () => {
    const mockLevel = { id: 1, name: 'Updated Level' };
    const levelId = 1;

    service.updateLevel(levelId, mockLevel).subscribe(response => {
      expect(response).toEqual(mockLevel);
    });

    const req = httpMock.expectOne(`http://localhost:3000/levels/${levelId}`);
    expect(req.request.method).toBe('PUT');
    req.flush(mockLevel);
  });

  it('should delete a level', () => {
    const levelId = 1;

    service.deleteLevel(levelId).subscribe(response => {
      expect(response).toBeNull();
    });

    const req = httpMock.expectOne(`http://localhost:3000/levels/${levelId}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
