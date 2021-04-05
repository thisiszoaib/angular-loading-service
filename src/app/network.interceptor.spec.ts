import { TestBed } from '@angular/core/testing';

import { NetworkInterceptor } from './network.interceptor';

describe('NetworkInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NetworkInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NetworkInterceptor = TestBed.inject(NetworkInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
