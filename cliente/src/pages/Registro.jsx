import { useEffect, useState } from "react";
import ListaProdutos from "../components/ListaProdutos";

export default function Registrar() {
  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);

  useEffect(() => {
    const FormRegistro = async () => {
      event.preventDefault();
      try {
        await fetch('http://localhost:3000/usuarios', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            nome: nome,
            email: email
          })
        });
      } catch{
        alert("O código deu pau, press F")
      }






}
  })
  event.preventDefault();

  return (

  );
}