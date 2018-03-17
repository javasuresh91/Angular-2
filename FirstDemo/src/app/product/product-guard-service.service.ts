import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot } from '@angular/router';


@Injectable()
export class ProductGuardServiceService implements CanActivate{

  constructor() { }

  canActivate(snapshot : ActivatedRouteSnapshot) :boolean {
   console.log("Routing Check Activation");
    return true;
  }

}
