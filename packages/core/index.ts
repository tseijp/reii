import type { Atom, Fun } from "@reii/types";

export function atom<T>(value: T): Atom<T> {
        const set = new Set<Fun<T>>()
        const ret = (() => value) as Atom<T>
        ret.mount = (fun) => void set.add(fun)
        ret.clean = (fun) => void set.delete(fun)
        ret.flush = (next) => {
                const isFun = typeof next === "function"
                // @ts-ignore
                value = isFun? next(value) : next
                set.forEach(l => l(value))
        }
        return ret
}
