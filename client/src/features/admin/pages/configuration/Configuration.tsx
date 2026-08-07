import { useEffect, useState } from "react";
import CompanyDataCard from "@/features/company/components/companyDataCard/CompanyDataCard";
import { buttonAddUser, h1, panel } from "./styles";
import Modal from "@/shared/components/modal/Modal";
import SectionPanel from "@/shared/components/section-panel/SectionPanel";
import TableUsers from "./components/TableUsers";
import CreateUser from "./components/form/CreateUser";
import { useRegister } from "@/features/user/hook/use-register";
import { UseGetUsers } from "@/features/user/hook/use-get-users";
import type { RegisterRequest } from "../../api/dto/RegisterRequest";
import { useGetCompanyData } from "../../hook/get-companyData";

const Configuration = () => {
    const { companyData, getCompany, companyLoading } = useGetCompanyData();
    const { users, getUsers, addUser } = UseGetUsers();
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
    const { isLoading, register, user: createdUser } = useRegister();

    const isPageLoading = companyLoading; /*|| usersLoading*/

    useEffect(() => {
        getUsers();
        getCompany();
    }, []);

    useEffect(() => {
        if (!createdUser) return;

        addUser(createdUser);
    }, [createdUser, addUser]);

    const handleCreateUser = async (data: RegisterRequest) => {
        await register(data);

        setIsCreateUserOpen(false);
    };

    if (isPageLoading) {
        return (
            <section className={panel}>
                <p>Cargando...</p>
            </section>
        );
    }

    return (
        <section className={panel}>
            <h1 className={h1}>Configuracion</h1>
            <SectionPanel title="Datos empresa">
                <CompanyDataCard companyData={companyData!} />
            </SectionPanel>
            <SectionPanel
                title="Usuarios"
                actions={
                    <button
                        className={buttonAddUser}
                        onClick={() => setIsCreateUserOpen(true)}
                    >
                        Crear usuario
                    </button>
                }
            >
                <TableUsers
                    isloading={isLoading}
                    users={users}
                />
            </SectionPanel>

            <Modal
                isOpen={isCreateUserOpen}
                onClose={() => setIsCreateUserOpen(false)}
            >
                <CreateUser onSubmit={handleCreateUser} />
            </Modal>
        </section>
    );
};

export default Configuration;
