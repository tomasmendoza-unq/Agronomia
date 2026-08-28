import * as styles from "./styles";
import { ExternalLinkIcon } from "./Icon";

type PaymentSectionProps = {
    pricesCount: number;
};

export const PaymentSection = ({ pricesCount }: PaymentSectionProps) => (
    <>
        <section className={styles.paymentSection}>
            <h4 className={styles.sectionTitle}>Formas de pago</h4>
            <div className={styles.paymentRow}>
                <span className={styles.paymentText}>
                    [{pricesCount}] formas de pago
                </span>
                <button
                    type="button"
                    className={styles.pricesLink}
                >
                    Ver
                    <ExternalLinkIcon className={styles.pricesLinkIcon} />
                </button>
            </div>
        </section>

        <button
            type="button"
            className={styles.pricesButton}
        >
            Lista de precios
        </button>
    </>
);
