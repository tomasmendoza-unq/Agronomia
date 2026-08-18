import { useEffect, useState, useRef } from "react";
import CompanyDataCard from "./components/company/CompanyDataCard";
import { h1, panel, contentGrid } from "./styles";
import Modal from "@/shared/components/modal/Modal";
import SectionPanel from "@/shared/components/section-panel/SectionPanel";
import TableUsers, { type TableUsersRef } from "./components/table/TableUsers";
import CreateUser from "./components/form/CreateUser";
import { useGetCompanyData } from "../../hook/get-companyData";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import Spinner from "@/shared/components/spinner/Spinner";

const Configuration = () => {
    const { companyData, getCompany, companyLoading } = useGetCompanyData();
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
    const tableUsersRef = useRef<TableUsersRef>(null);

    useEffect(() => {
        getCompany();
    }, []);

    const handleUserCreated = () => {
        tableUsersRef.current?.refresh();
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
            <h1 className={h1}>Configuración</h1>

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
                        onClose={() => setIsCreateUserOpen(false)}
                    />
                )}
            </Modal>
        </section>
    );
};

export default Configuration;
