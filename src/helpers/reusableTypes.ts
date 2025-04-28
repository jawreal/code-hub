import { ReactNode } from 'react';

export interface ITEMS_TYPE {
  name: string;
  icon?: ReactNode;
}

export interface TOGGLE_STATE {
  sidebar?: boolean;
  modal?: boolean;
}
