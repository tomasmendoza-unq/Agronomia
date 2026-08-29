import type { Provider } from "../../types/Provider";
import * as styles from "./styles";
import { ProviderHeader } from "./ProviderHeader";
import { CompanyData } from "./CompanyData";
import { PaymentSection } from "./PaymentSection";
import { IconList } from "@/shared/components/iconList/IconList";
import contactsSections from "./types/contact";

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

            {contactsSections(provider).map((section) => (
                <IconList
                    key={section.title}
                    {...section}
                />
            ))}

            <PaymentSection pricesCount={pricesCount} />
        </article>
    );
};
