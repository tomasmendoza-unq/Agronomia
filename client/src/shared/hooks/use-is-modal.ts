import { useState } from "react";
import { useNavigate } from "react-router";
import type { ModalAction } from "../types/modal/modal-action";

const useIsModal = () => {
    const navigate = useNavigate();
    const [is, setIsOpen] = useState(false);
    const [action, setAction] = useState<ModalAction>();

    const backToPrev = () => {
        navigate(-1);
    };

    const onOpenIs = (isData: boolean, action: ModalAction) => {
        if(!isData) {
            navigate(-1);
        }
        else {
            setIsOpen(true);
            setAction(action);
        }
    }

    const isOpen = (a: ModalAction) => is && action === a

    const refresh = () => {
        setIsOpen(false);
        setAction(undefined);
    }

    return {isOpen, onOpenIs, backToPrev, refresh}
}

export default useIsModal;