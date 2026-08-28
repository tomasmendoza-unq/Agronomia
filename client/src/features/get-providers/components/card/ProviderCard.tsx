import type { Provider } from "../../types/Provider";
import * as styles from "./styles";
import { ProviderHeader } from "./ProviderHeader";
import { CompanyData } from "./CompanyData";
import { ContactsSection } from "./ContactsSection";
import { PaymentSection } from "./PaymentSection";

export const ProviderCard = ({ provider }: { provider: Provider }) => {
    const providerName = provider.tradeName || provider.legalName;
    const pricesCount = provider.listPrices?.length ?? 0;

    return (
        <article className={styles.card}>
            <ProviderHeader providerName={providerName} />

            <CompanyData
                legalName={provider.legalName}
                cuit={provider.cuit}
            />

            <hr className={styles.divider} />

            <ContactsSection
                phoneNumber={provider.phoneNumber}
                travelerName={provider.traveler?.fullName}
                travelerPhoneNumber={provider.traveler?.phoneNumber}
            />

            <PaymentSection pricesCount={pricesCount} />
        </article>
    );
};
