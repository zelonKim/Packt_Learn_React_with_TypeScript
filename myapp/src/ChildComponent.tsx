import { memo } from "react"

/* export const ChildComponent = () => {
    return <span> This is a Child </span> 
}
*/

export const ChildComponent = memo(() => {
    return <span> This is a Child </span>
})



