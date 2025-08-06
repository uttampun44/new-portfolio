'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { store, AppStore } from '../lib/store'

type storeProviderProps = {
    children: React.ReactNode
}
export default function StoreProvider({children}: storeProviderProps) {
    const storeRef = useRef<AppStore>(undefined)

    if (!storeRef.current) {
    
        storeRef.current = store()
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}