import { Injectable } from '@angular/core';
import { IEmployee } from '../interfaces/iemployee';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class EmployeeService {
private _mock: IEmployee[] = [];

constructor() {
  for (let i = 0; i < 5; i++) {
    this._mock.push({
      name: 'Data ' + i,
      id: i,
      position: 'Manager',
      salary: '$340' + i,
      createdAt: new Date().toISOString()
    });
  }
}

list (): Observable<IEmployee[]> {
  return Observable.of(this._mock);
}

/**
 * Create new employee
 * @param param
 * @return Observable<IEmployee> with the id
 */
create(param: IEmployee): Observable<IEmployee> {
  param.id = this._mock.length;
  param.createdAt = new Date().toISOString();
  this._mock.push(param);
  return Observable.of(param);
}

/**
 * Remove an employee
 * @param employee to remove
 * @return Observable<IEmployee> the employee just removed
 */
delete(employee: IEmployee): Observable<IEmployee> {
  this._mock = this._mock.filter(emp => emp.id !== employee.id);
  return Observable.of(employee);
}

/**
 * Update an employee using the employee id
 * @param param:Object what to update with in the employee
 * @return Observable<IEmployee>
 */
edit(param: {[key: string]: any}, id): Observable<IEmployee> {
  const index = this._mock.findIndex(emp => emp.id === id);
  this._mock[index] = {
    ...this._mock[index],
    ...param
  };
  return Observable.of(this._mock[index]);
}


}
