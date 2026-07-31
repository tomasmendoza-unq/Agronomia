import CompanyDataCard from "@/features/company/components/companyDataCard/CompanyDataCard";
import ConfigPanel from "../../components/panel/ConfigPanel";

const Configuration = () => (
    <section className="panel">
        <h1>Configuracion</h1>
        <ConfigPanel title="Datos empresa">
            <CompanyDataCard
                companyData={{
                    name: "AgroTech",
                    legalName: "AgroTech S.A.",
                    cuit: "30-12345678-9",
                    logo: "https://res.cloudinary.com/dvkvlpq07/image/upload/v1785440325/logo_tfzoil.jpg",
                }}
            />
        </ConfigPanel>
        <ConfigPanel title="Usuarios">
            <p>Lista de usuarios</p>
        </ConfigPanel>
    </section>
);

export default Configuration;
