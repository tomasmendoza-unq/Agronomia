import { useEffect, useState } from "react";
import CompanyDataCard from "./components/company/CompanyDataCard";
import { h1, panel, contentGrid } from "./styles";
import Modal from "@/shared/components/modal/Modal";
import SectionPanel from "@/shared/components/section-panel/SectionPanel";
import TableUsers from "./components/table/TableUsers";
import CreateUser, {
    type CreateUserFormData,
} from "./components/form/CreateUser";
import type { RegisterRequest } from "../../api/dto/RegisterRequest";
import { useGetCompanyData } from "../../hook/get-companyData";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import SuccessToast from "@/shared/components/toast/success/SuccessToast";
import { useRegister } from "../../hook/use-register";
import UseGetUsers from "../../hook/use-get-users";

const Configuration = () => {
    const { companyData, getCompany, companyLoading } = useGetCompanyData();
    const { users, getUsers, usersLoading } = UseGetUsers();
    const { register, registerError, refresh } = useRegister();

    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
    const [showSuccessToast, setShowSuccessToast] = useState(false);

    useEffect(() => {
        getUsers(0);
        getCompany();
    }, []);

    const handlePageChange = (page: number) => {
        getUsers(page);
    };

    const handleCreateUser = async (data: CreateUserFormData) => {
        if (!companyData?.id) return;

        console.log(data);

        const userRegister: RegisterRequest = {
            ...data,
            id_branch: Number(data.branch),
            id_company: companyData.id,
        };

        await register(userRegister);

        await getUsers(users?.page);
        setIsCreateUserOpen(false);
        setShowSuccessToast(true);
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
                    onSubmit={handleCreateUser}
                    branches={companyData!.branches}
                />
            </Modal>

            {registerError && (
                <ErrorToast
                    message={registerError.message}
                    onClose={refresh}
                />
            )}

            {showSuccessToast && !registerError && (
                <SuccessToast
                    message="Usuario registrado correctamente"
                    onClose={() => setShowSuccessToast(false)}
                />
            )}
        </section>
    );
};

export default Configuration;
