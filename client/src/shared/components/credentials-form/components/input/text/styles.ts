import { sva } from "@styled-system/css";

export const styles = sva({
    slots: ['container', 'label'],
    base: {
        container: {
            display: 'grid',
            placeItems: 'center',
            gap: '6px',
            width: '100%',
        },
        label: {
            width: '90%',
        }
    }
}).raw()