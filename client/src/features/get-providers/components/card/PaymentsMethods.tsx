import { RoleGuard } from "@/core/auth/components/RoleGuard";
import { ExternalLinkIcon } from "@/shared/components/icon/components/icons/ExternalLink";
import SubSection from "@/shared/components/section/components/subSection/SubSection";
import { paymentRow, paymentText, pricesLink, pricesLinkIcon } from "./styles";

export const PaymentsMethods = ({ payments }: { payments: string[] }) => {
    return (
        <SubSection
            title="Formas de pago"
            items={[payments.length]}
            renderItem={(count) => (
                <div className={paymentRow}>
                    <span className={paymentText}>
                        {count > 0
                            ? `${count} formas de pago`
                            : "Aún no existen formas de pago"}
                    </span>
                    {count > 0 ? (
                        <button
                            type="button"
                            className={pricesLink}
                        >
                            Ver
                            <ExternalLinkIcon className={pricesLinkIcon} />
                        </button>
                    ) : (
                        <RoleGuard allowedRoles={["DUENIO"]}>
                            <button
                                type="button"
                                className={pricesLink}
                            >
                                Añadir
                                <ExternalLinkIcon className={pricesLinkIcon} />
                            </button>
                        </RoleGuard>
                    )}
                </div>
            )}
        />
    );
};
