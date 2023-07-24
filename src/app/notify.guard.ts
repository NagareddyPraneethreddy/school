import { CanDeactivateFn } from '@angular/router';

export const notifyGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {

  if (confirm("If you go back your progress will not save! are you will to go back? ")) {
    return true;
  }
  else {
    return false;
  }
};
