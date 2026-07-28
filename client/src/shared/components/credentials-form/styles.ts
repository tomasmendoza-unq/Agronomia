import { css, sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const container = css.raw({
    display: 'grid',
    placeItems: 'center',
    gridTemplateRows: '20% 50% 30%',
    width: '90%',
    height: '80%',
    bg: '#FFF',
    boxShadow: '0px 10px 15px -3px rgba(2, 6, 23, 0.1), 0px 4px 6px -4px rgba(2, 6, 23, 0.1)',
    borderRadius: '4vw'
});

const title = css.raw({
    fontSize: '24px',
    fontWeight: 'bold'
});

const form = sva({
    slots: ['form', 'input', 'button'],
    base: {
        form: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            height: '100%'
        },
        input: {},
        button: {
            bg: token("colors.greenColor")
        }
    }
}).raw();



export const styles = sva({
    slots: ['container', 'title', 'form'],
    base: {
        container: container,
        title: title,
        form: form
    }
}).raw();