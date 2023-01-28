import { useEffect, useState } from 'react'
import type { Get, Set, Use } from './index'

export default useAtomValue

export const useAtomValue: Get = (atom) => {
        const [value, set] = useState(atom)
        /**
         * mount and clean set as listner
         */
        useEffect(() => void atom.mount(set), [atom])
        useEffect(() => () => atom.clean(set), [atom])

        return value
}

export const useSetAtom: Set = (atom) => (next) => atom.flush(next)

export const useAtom: Use = (atom) => [useAtomValue(atom), atom]