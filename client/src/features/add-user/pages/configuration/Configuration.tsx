import { useEffect, useState, useRef } from "react";
import CompanyDataCard from "./components/company/CompanyDataCard";
import {
    panel,
    contentGrid,
    successContent,
    successMessage,
    successTitle,
} from "./styles";
import Modal from "@/shared/components/modal/Modal";
import SectionPanel from "../../../../shared/components/section/components/section-panel/SectionPanel";
import TableUsers, { type TableUsersRef } from "./components/table/TableUsers";
import CreateUser from "./components/form/CreateUser";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import Spinner from "@/shared/components/spinner/Spinner";
import { useGetCompanyData } from "../../hooks/get-companyData";

const Configuration = () => {
    const { companyData, getCompany, companyLoading } = useGetCompanyData();
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
    const [createdUserEmail, setCreatedUserEmail] = useState<string>();
    const tableUsersRef = useRef<TableUsersRef>(null);

    useEffect(() => {
        getCompany();
    }, []);

    const handleUserCreated = (email: string) => {
        tableUsersRef.current?.refresh();
        setIsCreateUserOpen(false);
        setCreatedUserEmail(email);
    };

    if (companyLoading || !companyData) {
        return (
            <section className={panel}>
                <Spinner
                    size="lg"
                    centered
                />
            </section>
        );
    }

    return (
        <section className={panel}>
            <div className={contentGrid}>
                <SectionPanel title="Datos empresa">
                    <CompanyDataCard
                        companyData={companyData}
                        onCompanyUpdated={getCompany}
                    />
                </SectionPanel>

                <SectionPanel
                    title="Usuarios"
                    actions={
                        <Button
                            color="transparent"
                            hoverColor="transparent"
                            borderColor={token("colors.primaryColor")}
                            textColor={token("colors.primaryColorSubtle")}
                            onClick={() => setIsCreateUserOpen(true)}
                        >
                            Crear usuario
                        </Button>
                    }
                >
                    <TableUsers ref={tableUsersRef} />
                </SectionPanel>
            </div>

            <Modal
                isOpen={isCreateUserOpen}
                onClose={() => setIsCreateUserOpen(false)}
            >
                {companyData && (
                    <CreateUser
                        companyId={companyData.id}
                        branches={companyData.branches ?? []}
                        onUserCreated={handleUserCreated}
                    />
                )}
            </Modal>

            <Modal
                isOpen={Boolean(createdUserEmail)}
                onClose={() => setCreatedUserEmail(undefined)}
                compact
            >
                <div className={successContent}>
                    <h2 className={successTitle}>Usuario creado</h2>
                    <p className={successMessage}>
                        Usuario creado con exito, se a enviado el mail a{" "}
                        {createdUserEmail}
                    </p>
                    <Button
                        color={token("colors.primaryColor")}
                        hoverColor={token("colors.primaryColorHover")}
                        onClick={() => setCreatedUserEmail(undefined)}
                    >
                        Cerrar
                    </Button>
                </div>
            </Modal>
        </section>
    );
};

export default Configuration;
