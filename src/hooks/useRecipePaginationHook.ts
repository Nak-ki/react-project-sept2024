
import {useAppSelector} from "./useAppSelector.ts";
import {useSearchParams} from "react-router-dom";

export const usePagination = () => {
    const [query, setQuery] = useSearchParams()
    const {total, limit} = useAppSelector(state => state.recipe)

    const skip = query.get('skip')

    return{
        prev: () => setQuery(prev => {
            if (skip <= "0") {
                prev.set("skip", "0")
            }
            else {
                prev.set('skip', (+skip - 30).toString())
            }
            return prev
        }),
        next: () => setQuery(prev => {
            prev.set('skip', (+skip + 30).toString())
            return prev
        }),
        total,
        limit,
        skip: skip ? skip : '0'
    }
}