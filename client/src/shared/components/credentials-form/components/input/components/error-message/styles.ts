import { css, sva } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const container = css.raw({
    width: '90%',
});

const text = css.raw({
    alignSelf: 'flex-start',
    fontSize: '16px',
    color: token('colors.danger'),
});

export const styles = sva({
    slots: ['container', 'text'],
    base: {
        container,
        text,
    }
}).raw()