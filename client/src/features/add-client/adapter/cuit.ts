function adapterCuit(cuit: string) {
    return cuit.slice(0, 2) + "-" + cuit.slice(2, 10) + "-" + cuit.slice(10);
}

export default adapterCuit;