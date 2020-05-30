import { createRef } from 'react';

export const navigationRef = createRef();

export function navigate(routeName, params?) {
  navigationRef.current?.navigate(routeName, params);
}
