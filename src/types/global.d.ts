import type { ReactNode } from 'react';
export {} 
declare global {
  interface CREDENTIALS_TYPE {
    username?: string;
    email: string;
    password: string;
  };
  interface InfoType extends Pick<CREDENTIALS_TYPE, 'username' | 'email'> {
    displayName?: string;
    profile_img?: string;
    address?: string;
    totalQuestions?: number;
    totalChallenges?: number;
    totalAnswers?: number;
    lastSignin?: Date | string; 
  }
  interface STATSDATA_TYPE {
    total?: number | undefined;
    hasBorder?: boolean | undefined ;
    postType?: string | undefined;
  }
  interface TOGGLE_STATE {
    dropdown?: boolean;
    sidebar?: boolean;
    modal?: boolean;
  }
  interface POSTDATA_TYPE{
    id?: string;
    post_type?: string | null;
    title?: string;
    body?: string;
    createdAt?: number | Date; //number | Date if using Date.now()
  }
  interface TAGS_TYPE {
    name: string;
    isActive: boolean;
  }
  interface ITEMS_TYPE {
    name: string;
    icon?: ReactNode;
  }
  type INLINEALERT_TYPE = {
    type: "info" | "success" | "warning" | "error" | string;
    isActive?: boolean;
    text?: string;
  }; 
};