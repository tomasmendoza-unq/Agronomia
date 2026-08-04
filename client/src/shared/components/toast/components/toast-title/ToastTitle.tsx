import './styles.css';
import closeIcon from '@/assets/toast/close icon.svg';

type ToastHeaderProps = {
    title: string 
    icon: string 
    onActive: () => void
}

const ToastHeader = ({title, icon, onActive}: ToastHeaderProps) => {
    return (
        <div className = "toast-header-container">
            <section className = "toast-header-container_title">
                <figure>
                    <img src = {icon} alt = "Icono para la modal" />
                </figure>
                <p>{title}</p>
            </section>
            <section className = "toast-header-container_close">
                <figure>
                    <img src = {closeIcon} alt = "Icono para cerrar la modal" onClick = {onActive} />
                </figure>
            </section>
        </div>
    )
}

export default ToastHeader;