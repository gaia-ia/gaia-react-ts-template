import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// notify function type
type NotifyType = 'success' | 'error' | 'info' | 'warning';
type Notify = (message: string, type: NotifyType) => void;

const defaultNotify: Notify = () => {};

export const ToastContext: React.Context<{ notify: Notify }> =
  React.createContext({ notify: defaultNotify });

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const notify: Notify = (message, type) => {
    return toast[type](message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: localStorage.getItem('theme') === 'dark' ? 'dark' : 'light',
    });
  };

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
};
