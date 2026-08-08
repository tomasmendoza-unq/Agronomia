import { useEffect, useState } from "react";
import CompanyDataCard from "@/features/company/components/companyDataCard/CompanyDataCard";
import { h1, panel } from "./styles";
import Modal from "@/shared/components/modal/Modal";
import SectionPanel from "@/shared/components/section-panel/SectionPanel";
import TableUsers from "./components/TableUsers";
import CreateUser, {
    type CreateUserFormData,
} from "./components/form/CreateUser";
import { useRegister } from "@/features/user/hook/use-register";
import { UseGetUsers } from "@/features/user/hook/use-get-users";
import type { RegisterRequest } from "../../api/dto/RegisterRequest";
import { useGetCompanyData } from "../../hook/get-companyData";
import Button from "@/shared/components/button/Button";
import { token } from "@styled-system/tokens";

const Configuration = () => {
    const { companyData, getCompany, companyLoading } = useGetCompanyData();
    const { users, getUsers, usersLoading } = UseGetUsers();
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
    const { register, user: createdUser } = useRegister();

    const isPageLoading = companyLoading || usersLoading;

    useEffect(() => {
        getUsers();
        getCompany();
    }, []);

    useEffect(() => {
        if (!createdUser) return;
    }, [createdUser]);

    const handleCreateUser = async (data: CreateUserFormData) => {
        const userRegister: RegisterRequest = {
            ...data,
            id_company: companyData!.id,
        };

        await register(userRegister);

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
                <TableUsers users={users} />
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
