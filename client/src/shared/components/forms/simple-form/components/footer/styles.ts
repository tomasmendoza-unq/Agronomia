import { css, sva } from "@styled-system/css";

const footer = css.raw({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    height: {
        base: '90%',
        md: '50%'
    },
});

const linkContainer = css.raw({
    display: 'flex',
    flexDirection: {
        base: 'column',
        md: 'row',
    },
    justifyContent: 'space-evenly',
    alignItems: 'center',
    gap: {
        md: '6px',
    },
});

const textQuestion = css.raw({
    fontSize: '14px',
    color: '#21140FB2',
});

const ancla = css.raw({
    ...textQuestion,
    textDecoration: 'underline',
});

export const styles = sva({
    slots: ['footer', 'textQuestion', 'linkContainer', 'ancla'],
    base: {
        footer,
        textQuestion,
        linkContainer,
        ancla,
    }
}).raw()