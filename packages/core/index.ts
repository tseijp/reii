import type { Atom, Fun } from './types'

export * from './types'

export default atom

export function atom<T>(value: T): Atom<T> {
        const set = new Set<Fun<T>>()
        const self = (() => value) as Atom<T>
        /**
         * mount and clean set as listener
         */
        self.mount = (fun) => void set.add(fun)
        self.clean = (fun) => void set.delete(fun)
        self.flush = (next) => {
                value = typeof next === "function"
                        ? (next as ((value: T) => T))(value)
                        : next
                set.forEach((listener) => listener(value))
        }
        return self
}