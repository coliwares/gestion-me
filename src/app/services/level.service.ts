import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  private apiUrl = 'http://localhost:3000/levels'; // URL de la API de prueba

  constructor(private http: HttpClient) { }

  // Obtener todos los niveles
  getLevels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtener un nivel por ID
  getLevelById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // Agregar un nuevo nivel
  addLevel(level: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, level);
  }

  // Actualizar un nivel existente
  updateLevel(id: number, level: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, level);
  }

  // Eliminar un nivel
  deleteLevel(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
