import type { Client } from "../../domain/client";
import DataField from "@/shared/components/dataField/DataField";
import { card, cardBody, clientName, contactHeader, inlineLabel, inlineValue } from "./styles";
import { IconList } from "@/shared/components/icon/components/iconList/IconList";
import { PhoneIcon } from "@/shared/components/icon/components/icons/Phone";
import { InitialsName } from "@/shared/components/avatar/components/initialsName/InitialsName";
import type { RazonSocial } from "../../domain/razon-social";
import type { NaturalPerson } from "../../domain/natural-person";
import { UserIcon } from "@/shared/components/icon/components/icons/User";
import EmailIcon from "@/shared/components/icon/components/icons/EmailIcon";
import UbicationIcon from "@/shared/components/icon/components/icons/Ubication";

interface ClientCardProps {
    client: Client
}

export const ClientCard = ({ client }: ClientCardProps) => {
    return (
        <article className={card}>
            <header className={contactHeader}>
                <InitialsName
                    fullName={client.name + " " + client.surname}
                    size="md"
                    nameClassName={clientName}
                />
            </header>
                <DataField
                    label="CUIT/CUIL"
                    value={client.cuit}
                    labelClassName={inlineLabel}
                    valueClassName={inlineValue}
                />
            <div className={cardBody}>
                <IconList items={clientItems(client)} title={""} />
            </div>
        </article>
    );
};

const clientItems = (client: Client) => "razonSocial" in client ?  legalPersonItems(client) : naturalPersonItems(client);

function naturalPersonItems(client: NaturalPerson) {
    return [
        {
            icon: PhoneIcon,
            value: client.phone,
        },
        {
            icon: EmailIcon,
            value: client.email ?? "No indicado",
        },
        {
            icon: UbicationIcon,
            value: (client.ubication.address ?? "Dirección no indicada - [Localidad]") + " - " + client.ubication.location,
        }
    ]
}
function legalPersonItems(client: RazonSocial) {
    return [
        {
            icon: UbicationIcon,
            value: (client.ubication.address ?? "Dirección no indicada - [Localidad]") + " - " + client.ubication.location,
        },
        {
            icon: PhoneIcon,
            value: client.associatePhone,
        },
        {
            icon: UserIcon,
            value: client.name + " " + client.surname,
        },
        {
            icon: EmailIcon,
            value: client.email ?? "No indicado",
        },
    ]
}


export default ClientCard;
