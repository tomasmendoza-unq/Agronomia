import { css } from "@styled-system/css"
import { styles } from "./styles"
import type { BackgroundColor } from "@/shared/styles/background-color"

type ToastContainerProps = {
    bg: BackgroundColor
    isActive: boolean
    children: React.ReactNode
}

const ToastContainer = ({bg, isActive, children}: ToastContainerProps) => {

    const slot = styles(isActive);
    const container = css(slot.container, bg);
    const subContainer = css(slot.subcontainer);

    return (
        <div className = {container}>
            <div className = {subContainer}>
                {children}
            </div>
        </div>
    )
}

export default ToastContainer;