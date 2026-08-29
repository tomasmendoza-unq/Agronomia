export const formatCuit = (value: string) => {
    const cleanValue = value.replace(/-/g, "");

    return cleanValue
        .replace(/^(.{2})(.*)/, "$1-$2")
        .replace(/^(.{2})-(.{8})(.*)/, "$1-$2-$3");
}