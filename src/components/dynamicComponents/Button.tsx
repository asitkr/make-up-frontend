import { Link } from "react-router-dom";
import type { ButtonProps } from "../../types/button.ts";

const Button: React.FC<ButtonProps> = ({
    name,
    link = "",
    className = "",
    onClick,
    type = "button",
    icon = null,
    disabled = false,
}) => {

    return (
        <>
            {
                link && link.trim() !== "" ? (
                    <Link
                        className={`bg-primary text-white ${className}`}
                        to={link}
                    >
                        {name} {icon && <span className="pl-1">{icon}</span>}
                    </Link>
                ) : (
                    <button
                        type={type}
                        onClick={onClick}
                        className={`bg-primary text-white ${className}`}
                        disabled={disabled}
                    >
                        {name}
                        {icon && <span className="pl-1">{icon}</span>}
                    </button>
                )
            }
        </>
    )
}

export default Button;