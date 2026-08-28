import * as styles from "./styles";
import { PhoneIcon, UserIcon } from "./Icon";

type ContactsSectionProps = {
    phoneNumber: string;
    travelerName: string;
    travelerPhoneNumber?: string;
};

export const ContactsSection = ({
    phoneNumber,
    travelerName,
    travelerPhoneNumber,
}: ContactsSectionProps) => (
    <div className={styles.contacts}>
        <section className={styles.contactGroup}>
            <h4 className={styles.sectionTitle}>Contacto fábrica</h4>
            <div className={styles.contactDetail}>
                <PhoneIcon className={styles.contactIcon} />
                <span>{phoneNumber}</span>
            </div>
        </section>

        <section className={styles.contactGroup}>
            <h4 className={styles.sectionTitle}>Contacto viajante</h4>
            <div className={styles.contactDetail}>
                <UserIcon className={styles.contactIcon} />
                <span>{travelerName || "Sin viajante asignado"}</span>
            </div>
            <div className={styles.contactDetail}>
                <PhoneIcon className={styles.contactIcon} />
                <span>{travelerPhoneNumber || "Sin teléfono"}</span>
            </div>
        </section>
    </div>
);
