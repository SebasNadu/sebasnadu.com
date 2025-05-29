export type ContextSafeFunc = <E extends Event>(fn: (event: E) => void) => (event: E) => void;
