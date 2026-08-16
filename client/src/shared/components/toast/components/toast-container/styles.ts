import { css, sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const toastContainer = css.raw({
    position: 'fixed',
    bottom: '24px',
    right: '24px',
    display: 'grid',
    gridTemplateColumns: '2% 98%',
    bg: '#FFF',
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
});

const toastColorContainer = css.raw({
    width: '100%',
    height: '100%'
});

const toastSubContainer = css.raw({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '90%',
    height: '90%',
    color: '#FFF'
});

export const toastContainerSlot = {
    slots: ["container", "subcontainer", "toastColorContainer"],
    base: {
        container: toastContainer,
        subcontainer: toastSubContainer,
        toastColorContainer: toastColorContainer
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