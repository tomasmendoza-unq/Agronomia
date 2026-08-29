import type { Provider } from "../../types/Provider";
import * as styles from "./styles";

import contactsSections from "./types/contact";
import { IconList } from "@/shared/components/icon/components/iconList/IconList";
import { InitialsName } from "@/shared/components/avatar/components/initialsName/InitialsName";
import DataField from "@/shared/components/dataField/DataField";
import SubSection from "@/shared/components/section/components/subSection/SubSection";
import { ExternalLinkIcon } from "@/shared/components/icon/components/icons/ExternalLink";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";

export const ProviderCard = ({ provider }: { provider: Provider }) => {
    const providerName = provider.tradeName || provider.legalName;
    const pricesCount = provider.listPrices?.length ?? 0;

    return (
        <article className={styles.card}>
            <header className={styles.header}>
                <InitialsName
                    fullName={providerName}
                    size="md"
                    nameClassName={styles.providerName}
                />
            </header>
            <div className={styles.companyData}>
                <DataField
                    label="Razón social"
                    value={provider.legalName}
                    labelClassName={styles.label}
                />
                <DataField
                    label="CUIT"
                    value={provider.cuit}
                    labelClassName={styles.label}
                />
            </div>
            <hr className={styles.divider} />
            <div className={styles.cardBody}>
                {contactsSections(provider).map((section) => (
                    <IconList
                        key={section.title}
                        {...section}
                    />
                ))}
                <SubSection
                    title="Formas de pago"
                    items={[pricesCount]}
                    renderItem={(count) => (
                        <div className={styles.paymentRow}>
                            <span className={styles.paymentText}>
                                {count} formas de pago
                            </span>
                            <button
                                type="button"
                                className={styles.pricesLink}
                            >
                                Ver
                                <ExternalLinkIcon
                                    className={styles.pricesLinkIcon}
                                />
                            </button>
                        </div>
                    )}
                />
            </div>
            <Button
                color={token("colors.primaryColor")}
                hoverColor={token("colors.primaryColorHover")}
                textColor="white"
                className={styles.priceListButton}
            >
                Lista de precios
            </Button>
        </article>
    );
};
