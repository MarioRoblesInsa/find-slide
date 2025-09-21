import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function encodeId(id: number) {
    return Buffer.from(id.toString()).toString('base64');
}
export function decodeId(encoded: string): number {
  return parseInt(Buffer.from(encoded, 'base64').toString('utf-8'), 10);
}