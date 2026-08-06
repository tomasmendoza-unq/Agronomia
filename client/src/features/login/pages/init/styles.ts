import { css } from "@styled-system/css";
import { token } from "@styled-system/tokens";

const styles = css({
    display: 'grid',
    placeItems: 'center',
    width: '100vw',
    height: '100vh',
    bg: token("colors.surfacePageColor")
});

export default styles;