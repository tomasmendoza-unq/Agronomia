import { css, sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const form = css.raw({
    display: 'grid',
    gridTemplateRows: 'repeat(auto-fit, 1fr)',
    placeItems: 'center',
    width: '100%',
    height: '100%',
});

const elementContainer = css.raw({
    width: '90%',
    height: '20%',
    minHeight: '38px',
})

const input = css.raw({
    ...elementContainer,
    padding: '8px',
    border: '1px solid #A1A1AA',
    boxShadow: '0px 1px 2px rgba(2, 6, 23, 0.05)',
    borderRadius: '10px'
});

const button = css.raw({
    ...elementContainer,
    width: '90%',
    height: '16%',
    minHeight: '38px',
    border: '1px solid #3A5313',
    borderRadius: '10px',
    bg: token("colors.greenColor")
});

export const styles = sva({
    slots: ['form', 'input', 'button', 'elementContainer'],
    base: {
        form: form,
        input: input,
        button: button,
        elementContainer: elementContainer
    }
}).raw();