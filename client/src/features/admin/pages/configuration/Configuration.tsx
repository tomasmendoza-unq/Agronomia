import CompanyDataCard from "@/features/company/components/companyDataCard/CompanyDataCard";
import ConfigPanel from "../../components/panel/ConfigPanel";
import { panel } from "./styles";
import { UseAuth } from "@/shared/hooks/use-auth";

const Configuration = () => {
    const { companyData } = UseAuth();

    return (
        <section className={panel}>
            <h1>Configuracion</h1>
            <ConfigPanel title="Datos empresa">
                <CompanyDataCard companyData={companyData} />
            </ConfigPanel>
            <ConfigPanel title="Usuarios">
                <p>Lista de usuarios</p>
            </ConfigPanel>
        </section>
    );
};

export default Configuration;
