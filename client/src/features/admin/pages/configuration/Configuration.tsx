import ConfigPanel from "../../components/panel/ConfigPanel";

const Configuration = () => (
    <section className="panel">
        <h1>Configuracion</h1>
        <ConfigPanel title="Datos empresa">
            <p>Datos de la empresa</p>
        </ConfigPanel>
        <ConfigPanel title="Usuarios">
            <p>Lista de usuarios</p>
        </ConfigPanel>
    </section>
);

export default Configuration;
