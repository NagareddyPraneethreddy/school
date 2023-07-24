import { CanActivateFn, Router } from '@angular/router';

export const authenticationGuard: CanActivateFn = (route, state) => {

  if (localStorage.getItem("token")) {
    return true;
  }
  else {
    alert("you need to login to this page !")
    var router=new Router;
    router.navigateByUrl("/login");
    return false;
  }
};
