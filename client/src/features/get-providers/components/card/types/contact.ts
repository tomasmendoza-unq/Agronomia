import type { Provider } from "@/features/get-providers/types/Provider";
import { PhoneIcon } from "../../../../../shared/components/icon/components/icons/Phone";
import { UserIcon } from "../../../../../shared/components/icon/components/icons/User";
import type { IconListProps } from "@/shared/components/iconList/types/iconList.t";

const contactsSections = (provider: Provider): IconListProps[] => [
    {
        title: "Contacto fábrica",
        items: [
            {
                icon: PhoneIcon,
                value: provider.phoneNumber,
                fallback: "Sin teléfono",
            },
        ],
    },
    {
        title: "Contacto viajante",
        items: [
            {
                icon: UserIcon,
                value: provider.traveler?.fullName ?? "",
                fallback: "Sin viajante asignado",
            },
            {
                icon: PhoneIcon,
                value: provider.traveler?.phoneNumber ?? "",
                fallback: "Sin teléfono",
            },
        ],
    },
];

export default contactsSections;
