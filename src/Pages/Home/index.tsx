import { useState } from "react"
import { ButtonComponent } from "../../Components/Button"
import { InputComponent } from "../../Components/Input"

export const Home = ():JSX.Element => {
    const [count, setCount] = useState(0)
    return (
            <main>
                <h1>Home</h1>
                <ButtonComponent
                    handleFunction= {()=> setCount(count+1)}
                    name='contador'
                    buttonClass="not-ok"
                />
                <InputComponent
                    inputValue="Meu value"
                    inputPlaceholder="Meu placeholder"
                    inputType="text"
                    
                />
                <h2>{count}</h2>
            </main>
    )
}