import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Employee } from "./employee";
import { enviroment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class EmployeeService {
    private apiServerUrl = enviroment.apiBaseUrl;

    constructor(private http: HttpClient){}
    
    // Método para obtener todos los empleados
    public getEmployees(): Observable<Employee[]>{
        return this.http.get<any>(`${this.apiServerUrl}/employee/all`)
    }

    // Método para crear un empleado
    public addEmployee(employee: Employee): Observable<Employee>{
        return this.http.post<any>(`${this.apiServerUrl}/employee/add`, employee)
    }

    // Método para actualizar un empleado
    public updateEmployee(employee: Employee): Observable<Employee>{
        return this.http.put<any>(`${this.apiServerUrl}/employee/update`, employee)
    }

    // Método para eliminar un empleado
    public deleteEmployee(employeeId: number): Observable<void>{
        return this.http.delete<any>(`${this.apiServerUrl}/employee/delete/${employeeId}`)
    }

    
}