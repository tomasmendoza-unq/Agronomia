import { useEffect, useState } from "react";
import CompanyDataCard from "@/features/company/components/companyDataCard/CompanyDataCard";
import ConfigPanel from "../../components/panel/ConfigPanel";
import { buttonAddUser, h1, panel } from "./styles";
import { UseAuth } from "@/shared/hooks/use-auth";
import TableUsers from "@/features/user/components/TableUsers";
import { UseGetUsers } from "@/features/user/hook/get-users";
import Modal from "@/shared/components/modal/Modal";
import CreateUser from "@/features/user/components/form/CreateUser";

const Configuration = () => {
    const { companyData } = UseAuth();
    const { users, getUsers } = UseGetUsers();
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <section className={panel}>
            <h1 className={h1}>Configuracion</h1>
            <ConfigPanel title="Datos empresa">
                <CompanyDataCard companyData={companyData} />
            </ConfigPanel>
            <ConfigPanel
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
                <TableUsers users={users} />
            </ConfigPanel>

            <Modal
                isOpen={isCreateUserOpen}
                onClose={() => setIsCreateUserOpen(false)}
            >
                <CreateUser onSubmit={() => {}} />
            </Modal>
        </section>
    );
};

export default Configuration;
