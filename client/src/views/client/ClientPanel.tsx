import SearchEngineClient from "@/features/list-client/components/SearchEngineClient";
import { Link } from "react-router";
import styles from "./styles";

const ClientPanel = () => {

    const {title, container, optionsContainer} = styles()

    return (
        <section className={container}>
            <h1 className={title}>Cliente</h1>
            <div className={optionsContainer}>
                <SearchEngineClient />
                <Link to={""}>+ Añadir cliente</Link>
            </div>
        </section>
    )
}

export default ClientPanel;