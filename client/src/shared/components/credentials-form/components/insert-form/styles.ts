import { css, sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const form = css.raw({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    gap: '5%'
});

const input = css.raw({
    width: '90%',
    height: '20%',
    minHeight: '38px',
    padding: '8px',
    border: '1px solid #A1A1AA',
    boxShadow: '0px 1px 2px rgba(2, 6, 23, 0.05)',
    borderRadius: '10px'
});

const button = css.raw({
    width: '90%',
    height: '16%',
    minHeight: '38px',
    border: '1px solid #3A5313',
    borderRadius: '10px',
    bg: token("colors.greenColor")
});

export const styles = sva({
    slots: ['form', 'input', 'button'],
    base: {
        form: form,
        input: input,
        button: button
    }
}).raw();