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

export interface TAGS_TYPE {
  name: string;
  isActive: boolean;
}

export type INLINEALERT_TYPE = {
  type: "info" | "success" | "warning" | "error" | string;
  isActive?: boolean;
  text?: string;
}; 