'use client'
import { Provider } from 'react-redux'
import { store} from '@lib/store'

type storeProviderProps = {
    children: React.ReactNode
}
export default function StoreProvider({children}: storeProviderProps) {

    return <Provider store={store}>{children}</Provider>
}