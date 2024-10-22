"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export const SignupForm = () => {
    const router = useRouter();
    const [nameField,setNameField] = useState ('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleEnterbutton = () => {
        router.replace('/home')
    }


    return (
        <>
            <Input
                placeholder="Digite seu nome"
                value={nameField}
                onChange={t => setNameField(t)}
                
            />

            <Input
                placeholder="Digite seu e-mail"
                value={emailField}
                onChange={t => setEmailField(t)}
                
            />
            <Input 
                placeholder="Digite sua senha"
                value={passwordField}
                onChange={t => setPasswordField(t)}
                password
            />

            <Button
                label="Criar conta"
                onclick={handleEnterbutton}
                size={1}
            />

            
       </>
    );
}