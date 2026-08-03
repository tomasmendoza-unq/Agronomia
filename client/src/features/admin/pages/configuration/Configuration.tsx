import { useEffect, useState } from "react";
import CompanyDataCard from "@/features/company/components/companyDataCard/CompanyDataCard";
import { buttonAddUser, h1, panel } from "./styles";
import { UseAuth } from "@/shared/hooks/use-auth";
import Modal from "@/shared/components/modal/Modal";
import SectionPanel from "@/shared/components/section-panel/SectionPanel";
import TableUsers from "./components/TableUsers";
import CreateUser from "./components/form/CreateUser";
import { UseGetUsers } from "../../hook/get-users";

const Configuration = () => {
    const { user } = UseAuth();
    const { users, getUsers } = UseGetUsers();
    const [isCreateUserOpen, setIsCreateUserOpen] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

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
                <TableUsers users={users} />
            </SectionPanel>

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
