import { ReactNode } from 'react';

export interface ITEMS_TYPE {
  name: string;
  icon?: ReactNode;
}

export interface TOGGLE_STATE {
  dropdown?: boolean;
  sidebar?: boolean;
  modal?: boolean;
}
