import { createSignal, onMount, onCleanup } from 'solid-js'
import type { Get, Set, Use } from './index'

export default useAtomValue

export const useAtomValue: Get = (atom) => {
        const [value, set] = createSignal(atom)
        /**
         * mount and clean set as listner
         */
        onMount(() => atom.mount(set))
        onCleanup(() => atom.clean(set))

        return value as any // @TODO FIX TYPE
}

export const useSetAtom: Set = (atom) => (next) => atom.flush(next)

export const useAtom: Use = (atom) => [useAtomValue(atom), atom]