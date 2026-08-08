import { css } from "@styled-system/css";

export const panel = css({
    width: "100%",
    height: "100%",
    bg: "surfacePageColor",
});

export const h1 = css({
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "4",
});

export const contentGrid = css({
    display: "grid",
    // Columna izquierda fija de 320px, columna derecha ocupa el resto (1fr)
    gridTemplateColumns: "320px 1fr",
    gap: "8",
    alignItems: "start", // Alinea ambas secciones en la parte superior
    "@media (max-width: 1024px)": {
        gridTemplateColumns: "1fr",
    },
});
