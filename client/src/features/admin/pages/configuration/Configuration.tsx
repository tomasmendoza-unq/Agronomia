import { useEffect, useState } from "react";
import CompanyDataCard from "@/features/company/components/companyDataCard/CompanyDataCard";
import { buttonAddUser, h1, panel } from "./styles";
import { UseAuth } from "@/shared/hooks/use-auth";
import type { UserRequest } from "@/features/user/types/userRequest";
import Modal from "@/shared/components/modal/Modal";
import SectionPanel from "@/shared/components/section-panel/SectionPanel";
import TableUsers from "./components/TableUsers";
import CreateUser from "./components/form/CreateUser";
import { UseGetUsers } from "../../hook/get-users";
import { useRegister } from "@/features/user/hook/use-register";

const Configuration = () => {
    const { user } = UseAuth();
    const { users, getUsers } = UseGetUsers();
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);
    const { isLoading, register } = useRegister();

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const handleCreateUser = async () => {
        const form = document.querySelector("form");
        if (!form) return;

        const formData = new FormData(form as HTMLFormElement);
        const name = String(formData.get("name") ?? "").trim();
        const email = String(formData.get("email") ?? "").trim();
        const rol = String(
            formData.get("rol") ?? "Vendedor",
        ) as unknown as UserRequest["rol"];

        await register({
            name,
            email,
            rol,
            // TODO: provide the real company id from auth context when available
            id_company: 1,
        });

        setIsCreateUserOpen(false);
        getUsers();
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
