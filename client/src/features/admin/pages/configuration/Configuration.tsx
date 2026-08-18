import { useEffect, useState } from "react";
import CompanyDataCard from "./components/company/CompanyDataCard";
import { h1, panel, contentGrid } from "./styles";
import Modal from "@/shared/components/modal/Modal";
import SectionPanel from "@/shared/components/section-panel/SectionPanel";
import TableUsers from "./components/table/TableUsers";
import CreateUser from "./components/form/CreateUser";
import { useGetCompanyData } from "../../hook/get-companyData";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import UseGetUsers from "../../hook/use-get-users";

const Configuration = () => {
    const { companyData, getCompany, companyLoading } = useGetCompanyData();
    const { users, getUsers, usersLoading } = UseGetUsers();

    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);

    useEffect(() => {
        getUsers(0);
        getCompany();
    }, []);

    const handlePageChange = (page: number) => {
        getUsers(page);
    };

    const handleUserCreated = async () => {
        await getUsers(users?.page ?? 0);
    };

    const handleEditUser = () => {};
    const handleDeleteUser = async () => {};

    if ((companyLoading && !companyData) || (!users && usersLoading)) {
        return (
            <section className={panel}>
                <p>Cargando información...</p>
            </section>
        );
    }

    return (
        <section className={panel}>
            <h1 className={h1}>Configuración</h1>

            <div className={contentGrid}>
                <SectionPanel title="Datos empresa">
                    <CompanyDataCard
                        companyData={companyData!}
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
                    <TableUsers
                        isLoading={usersLoading}
                        users={users}
                        onPageChange={handlePageChange}
                        onEdit={handleEditUser}
                        onDelete={handleDeleteUser}
                    />
                </SectionPanel>
            </div>

            <Modal
                isOpen={isCreateUserOpen}
                onClose={() => setIsCreateUserOpen(false)}
            >
                <CreateUser
                    companyId={companyData!.id}
                    branches={companyData!.branches}
                    onUserCreated={handleUserCreated}
                    onClose={() => setIsCreateUserOpen(false)}
                />
            </Modal>
        </section>
    );
};

export default Configuration;
