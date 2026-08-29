import type { IconListProps } from "./types/iconList.t";
import SubSection from "@/shared/components/section/components/subSection/SubSection";
import { IconText } from "../iconText/IconText";

export function IconList({ title, items }: IconListProps) {
    return (
        <SubSection
            title={title}
            items={items}
            renderItem={({ icon, value, fallback }) => (
                <IconText
                    icon={icon}
                    value={value}
                    fallback={fallback}
                />
            )}
        />
    );
}
