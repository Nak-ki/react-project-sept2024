import {usePagination} from "../../../hooks/useUserPaginationHook.ts";
import css from "./UsersPagination.module.css";

const UsersPagination = () => {
    const {skip, total, prev, next} = usePagination()
    return (
        <div className={css.pagination}>
            <button className={css.prev} disabled={skip === "0"} onClick={prev}>prev</button>
            <div><p>{skip} {total}</p></div>
            <button className={css.next} disabled={+skip > (total - 30)} onClick={next}>next</button>
        </div>
    );
};

export {UsersPagination};
