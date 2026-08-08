import { useEffect, useState } from "react";
import CompanyDataCard from "@/features/company/components/companyDataCard/CompanyDataCard";
import { h1, panel } from "./styles";
import Modal from "@/shared/components/modal/Modal";
import SectionPanel from "@/shared/components/section-panel/SectionPanel";
import TableUsers from "./components/TableUsers";
import CreateUser, {
    type CreateUserFormData,
} from "./components/form/CreateUser";
import type { RegisterRequest } from "../../api/dto/RegisterRequest";
import type { User } from "@/features/admin/types/User";
import { useGetCompanyData } from "../../hook/get-companyData";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";
import ErrorToast from "@/shared/components/toast/error/ErrorToast";
import { useRegister } from "../../hook/use-register";
import UseGetUsers from "../../hook/use-get-users";

const Configuration = () => {
    const { companyData, getCompany, companyLoading } = useGetCompanyData();
    const { users, getUsers, usersLoading } = UseGetUsers();
    const { register, registerError, refresh } = useRegister();

    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);

    useEffect(() => {
        getUsers(0);
        getCompany();
    }, []);

    const handlePageChange = (page: number) => {
        getUsers(page);
    };

    const handleCreateUser = async (data: CreateUserFormData) => {
        if (!companyData?.id) return;

        const userRegister: RegisterRequest = {
            ...data,
            id_company: companyData.id,
        };

        await register(userRegister);

        if (!registerError) {
            await getUsers(users?.page);
            setIsCreateUserOpen(false);
        }
    };

    const handleEditUser = () => {};

    const handleDeleteUser = async () => {};

    if (companyLoading || (!users && usersLoading)) {
        return (
            <section className={panel}>
                <p>Cargando información...</p>
            </section>
        );
    }

    return (
        <section className={panel}>
            <h1 className={h1}>Configuración</h1>

            <SectionPanel title="Datos empresa">
                <CompanyDataCard companyData={companyData!} />
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

            <Modal
                isOpen={isCreateUserOpen}
                onClose={() => setIsCreateUserOpen(false)}
            >
                <CreateUser onSubmit={handleCreateUser} />
            </Modal>

            {editingUser && (
                <Modal
                    isOpen={Boolean(editingUser)}
                    onClose={() => setEditingUser(null)}
                >
                    <p>Editar usuario: {editingUser.name}</p>
                </Modal>
            )}
            {registerError && (
                <ErrorToast
                    message={registerError.message}
                    onClose={refresh}
                />
            )}
        </section>
    );
};

export default Configuration;
