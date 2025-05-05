import { 
  AlertCircle, 
  Info, 
  CheckCircle, 
  AlertTriangle, 
} from 'lucide-react';
import { ReactNode } from 'react';

type AlertColorConfig = {
  icon: string;
  bg: string;
  bgDarker: string;
  border: string;
  text: string;
  textSecondary: string;
  button: string;
  buttonText: string;
};

type AlertType = 'info' | 'success' | 'warning' | 'error' | string;

type AlertConfig = {
  [key in AlertType]: {
    title: string;
    icon: ReactNode;
    colors: AlertColorConfig;
  };
};

export const alertConfig: AlertConfig = {
  info: {
    title: 'Information',
    icon: <Info className="h-5 w-5" />,
    colors: {
      icon: 'text-blue-500 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-900/30',
      bgDarker: 'bg-blue-100 dark:bg-blue-800/40',
      border: 'border-blue-200 dark:border-blue-700',
      text: 'text-blue-800 dark:text-blue-200',
      textSecondary: 'text-blue-700 dark:text-blue-300',
      button: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500',
      buttonText: 'text-white'
    }
  },
  success: {
    title: 'Success',
    icon: <CheckCircle className="h-5 w-5" />,
    colors: {
      icon: 'text-green-500 dark:text-green-400',
      bg: 'bg-green-50 dark:bg-green-900/30',
      bgDarker: 'bg-green-100 dark:bg-green-800/40',
      border: 'border-green-200 dark:border-green-700',
      text: 'text-green-800 dark:text-green-200',
      textSecondary: 'text-green-700 dark:text-green-300',
      button: 'bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-500',
      buttonText: 'text-white'
    }
  },
  warning: {
    title: 'Warning',
    icon: <AlertTriangle className="h-5 w-5" />,
    colors: {
      icon: 'text-amber-500 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-900/30',
      bgDarker: 'bg-amber-100 dark:bg-amber-800/40',
      border: 'border-amber-200 dark:border-amber-700',
      text: 'text-amber-800 dark:text-amber-200',
      textSecondary: 'text-amber-700 dark:text-amber-300',
      button: 'bg-amber-600 hover:bg-amber-700 dark:bg-amber-600 dark:hover:bg-amber-500',
      buttonText: 'text-white'
    }
  },
  error: {
    title: 'Error',
    icon: <AlertCircle className="h-5 w-5" />,
    colors: {
      icon: 'text-red-500 dark:text-red-400',
      bg: 'bg-red-50 dark:bg-red-900/30',
      bgDarker: 'bg-red-100 dark:bg-red-800/40',
      border: 'border-red-200 dark:border-red-700',
      text: 'text-red-800 dark:text-red-200',
      textSecondary: 'text-red-700 dark:text-red-300',
      button: 'bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-500',
      buttonText: 'text-white'
    }
  }
};