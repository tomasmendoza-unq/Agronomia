import { useEffect, useState } from "react";
import CompanyDataCard from "@/features/company/components/companyDataCard/CompanyDataCard";
import { buttonAddUser, h1, panel } from "./styles";
import { UseAuth } from "@/shared/hooks/use-auth";
import type { UserRequest } from "@/features/user/types/userRequest";
import Modal from "@/shared/components/modal/Modal";
import SectionPanel from "@/shared/components/section-panel/SectionPanel";
import TableUsers from "./components/TableUsers";
import CreateUser from "./components/form/CreateUser";
import { useRegister } from "@/features/user/hook/use-register";
import { UseGetUsers } from "@/features/user/hook/use-get-users";

const Configuration = () => {
    const { user } = UseAuth();
    const { users, getUsers, addUser } = UseGetUsers();
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
    const { isLoading, register, user: createdUser } = useRegister();

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    useEffect(() => {
        if (!createdUser) return;

        addUser(createdUser);
    }, [createdUser, addUser]);

    const handleCreateUser = async () => {
        const form = document.querySelector("form");
        if (!form) return;

        const formData = new FormData(form as HTMLFormElement);
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const role = String(
            formData.get("role") ?? "Vendedor",
        ) as UserRequest["role"];

        await register({
            name,
            email,
            role,
            id_company: user.company.id,
        });

        setIsCreateUserOpen(false);
    };

    return (
        <section className={panel}>
            <h1 className={h1}>Configuracion</h1>
            <SectionPanel title="Datos empresa">
                <CompanyDataCard companyData={user.company} />
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
