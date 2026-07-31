import { card } from "./styles";

const SupplierCard = ({ children }: { children: React.ReactNode }) => (
    <div className={card}>{children}</div>
);

export default SupplierCard;
