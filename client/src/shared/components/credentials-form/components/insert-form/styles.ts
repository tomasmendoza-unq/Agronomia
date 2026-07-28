import { sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

export const styles = sva({
    slots: ['form', 'input', 'button'],
    base: {
        form: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            gap: '5%'
        },
        input: {
            width: '90%',
            height: '20%',
            minHeight: '38px',
            padding: '8px',
            border: '1px solid #A1A1AA',
            boxShadow: '0px 1px 2px rgba(2, 6, 23, 0.05)',
            borderRadius: '10px'
        },
        button: {
            bg: token("colors.greenColor")
        }
    }
}).raw();

export const formStyles = styles.form;
export const inputStyles = styles.input;
export const buttonStyles = styles.button;