import * as styles from "./styles";

type CompanyDataProps = {
    legalName: string;
    cuit: string;
};

export const CompanyData = ({ legalName, cuit }: CompanyDataProps) => (
    <div className={styles.companyData}>
        <div className={styles.dataGroup}>
            <span className={styles.label}>Razón social</span>
            <p className={styles.value}>{legalName}</p>
        </div>
        <div className={styles.dataGroup}>
            <span className={styles.label}>CUIT</span>
            <p className={styles.value}>{cuit}</p>
        </div>
    </div>
);
