import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { loginResolverResolver } from './login-resolver.resolver';

describe('loginResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => loginResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
