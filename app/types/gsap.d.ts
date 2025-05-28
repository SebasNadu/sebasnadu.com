export type ContextSafeFunc = <T extends (...args: unknown[]) => unknown>(func: T) => T;
