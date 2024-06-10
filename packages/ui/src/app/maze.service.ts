import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { MazeDto } from 'maze-dto';

@Injectable({ providedIn: 'root' })
export class MazeService {
  private base: string = '/maze';
  private http: HttpClient = inject(HttpClient);

  getMazes(): Observable<MazeDto[]> {
    return this.http.get<{ mazes: MazeDto[] }>(this.base).pipe(map((response) => response.mazes));
  }

  getMaze(mazeId: string): Observable<MazeDto> {
    return this.http.get<MazeDto>(`${this.base}/${mazeId}`);
  }

  deleteMaze(mazeId: string): Observable<void> {
    return this.http.delete<void>(`${this.base}/${mazeId}`);
  }
}
