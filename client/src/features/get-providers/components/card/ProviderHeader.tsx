import * as styles from "./styles";

type ProviderHeaderProps = {
    providerName: string;
};
const getInitials = (name: string) =>
    name
        .trim()
        .split(/\s+/)
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();

export const ProviderHeader = ({ providerName }: ProviderHeaderProps) => (
    <header className={styles.header}>
        <span className={styles.initials}>{getInitials(providerName)}</span>
        <h3 className={styles.providerName}>{providerName}</h3>
    </header>
);
