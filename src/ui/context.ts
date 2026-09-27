import { createContext } from 'preact';
import { useContext } from 'preact/hooks';
import type { AppController } from '../app/controller';

export const ControllerContext = createContext<AppController | null>(null);

export function useController(): AppController {
  const controller = useContext(ControllerContext);
  if (!controller) throw new Error('useController() must be used inside <ControllerContext.Provider>');
  return controller;
}
