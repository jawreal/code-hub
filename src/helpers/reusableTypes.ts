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

export interface POSTDATA_TYPE{
  post_type?: string | null;
  title?: string;
  body?: string;
  tags?: string;
}