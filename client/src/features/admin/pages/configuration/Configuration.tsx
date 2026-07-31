import CompanyDataCard from "@/features/company/components/companyDataCard/CompanyDataCard";
import ConfigPanel from "../../components/panel/ConfigPanel";
import { buttonAddUser, panel } from "./styles";
import { UseAuth } from "@/shared/hooks/use-auth";
import TableUsers from "@/features/user/components/TableUsers";
import { UseGetUsers } from "@/features/user/hook/get-users";
import { useEffect } from "react";

const Configuration = () => {
    const { companyData } = UseAuth();

    const { users, getUsers } = UseGetUsers();

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <section className={panel}>
            <h1>Configuracion</h1>
            <ConfigPanel title="Datos empresa">
                <CompanyDataCard companyData={companyData} />
            </ConfigPanel>
            <ConfigPanel
                title="Usuarios"
                actions={
                    <button className={buttonAddUser}>Crear usuario</button>
                }
            >
                <TableUsers users={users} />
            </ConfigPanel>
        </section>
    );
};

export default Configuration;
