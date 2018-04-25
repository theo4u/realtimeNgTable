import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';

@Injectable()
export class EmployeeService {
private _endPoint = 'http://localhost:2000/employee'; // normally you use environment.ts

constructor(private _http: HttpClient) {
}

list (): Observable<IEmployee[]> {
  return this._http.get(this._endPoint)
  .map(res => <IEmployee[]> res);
}

/**
 * Create new employee
 * @param param
 * @return Observable<IEmployee> with the id
 */
create(param: IEmployee): Observable<IEmployee> {
  return this._http.post(this._endPoint, param)
  .map(res => <IEmployee> res);
}

/**
 * Remove an employee
 * @param employee to remove
 * @return Observable<IEmployee> the employee just removed
 */
delete(employee: IEmployee): Observable<IEmployee> {
  return this._http.delete(`${this._endPoint}/${employee.id}`)
  .mapTo(employee);
}

}
