import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to Beja.web.ts
// and on native platforms to Beja.ts
import BejaModule from './BejaModule';
import BejaView from './BejaView';
import { ChangeEventPayload, BejaViewProps } from './Beja.types';

// Get the native constant value.
export const PI = BejaModule.PI;

export function hello(): string {
  return BejaModule.hello();
}

export async function setValueAsync(value: string) {
  return await BejaModule.setValueAsync(value);
}

const emitter = new EventEmitter(BejaModule ?? NativeModulesProxy.Beja);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { BejaView, BejaViewProps, ChangeEventPayload };
