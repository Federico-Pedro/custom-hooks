import { useState } from "react"

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setFormState({
            ...formState, //toda la informacion que esta en el formState que no sea modificada se mantiene
            [name]: value //cambia este valor (no importa el campo)
        })
    }

    return {
        ...formState,
        onInputChange
    }
}
