import { ResolveFn } from '@angular/router';
import { LoginServiceService } from '../../services/applicationServices/login-service.service';
import { inject, Inject } from '@angular/core';
import { catchError, of } from 'rxjs';

export const loginResolverResolver: ResolveFn<any> =  (route, state) => {
   return inject(LoginServiceService).fetchTestData().pipe(
    catchError(
      (error)=>{
        return of('No data')
      }
    )
  )

};
