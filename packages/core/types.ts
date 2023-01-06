export default Atom

export interface Atom<T, F = (prev: T) => T> {
        (): T
        mount(fun: Fun<T>): void
        clean(fun: Fun<T>): void
        flush(next: T | F): void
}

export type Fun<T = unknown, F = (prev: T) => T> = (next: T | F) => void

export type Get = <T>(atom: Atom<T>) => T

export type Set = <T>(atom: Atom<T>) => Fun<T>

export type Use = <T>(atom: Atom<T>) => [T, Fun<T>]
