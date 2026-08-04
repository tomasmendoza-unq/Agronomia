import type { ActiveStyleSlot } from "@/shared/styles/active/active-slots";
import { css, sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const toastContainer = css.raw({
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    display: 'grid',
    placeItems: 'center',
    minWidth: '265px',
    width: {
        base: '265px',
        md: '26%'
    },
    height: '14%',
    minHeight: '146px',
    borderRadius: '20px',
    animation: `sliceInY ${token("durations.medium")} forwards`
})

const toastSubContainer = css.raw({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '90%',
    height: '90%',
    color: '#FFF'
});

export const toastContainerSlot: ActiveStyleSlot<"container" | "subcontainer"> = {
    slots: ["container", "subcontainer"],
    base: {
        container: toastContainer,
        subcontainer: toastSubContainer
    },
    variants: {
        show: {
            true: {
                container: { 
                    display: 'none' 
                },
                subcontainer: {}
            },
        }
    }
};

export const styles = (is: boolean) => sva(toastContainerSlot).raw({ show: is });