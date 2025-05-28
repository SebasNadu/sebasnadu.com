// export type ContextSafeFunc = <T extends Function>(func: T) => T;
export type ContextSafeFunc = <T extends (...args: unknown[]) => unknown>(func: T) => T;
