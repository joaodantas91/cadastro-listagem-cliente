import { useState } from "react";
import { Container, FormWrapper } from "./styles";

export function Signup ({props}) {

  const [costumerName, setCostumerName] = useState('');
  const [costumerEmail, setCostumerEmail] = useState('');
  const [costumerPhone, setCostumerPhone] = useState('');

  return (
    <Container>
      <form 
        onSubmit={(event)=>{
          props.handleSubmit(event, costumerName, costumerEmail, costumerPhone)
        }}
      >
        <FormWrapper>

          <h1>Cadastro - Cliente</h1>
          <input 
            type="text" 
            placeholder="Nome" 
            value={costumerName} 
            onChange={(e)=>{setCostumerName(e.target.value)}}
          />

          <input 
            type="email" 
            placeholder="Email" 
            value={costumerEmail} 
            onChange={(e)=>{setCostumerEmail(e.target.value)}}
          />

          <input 
            type="tel" 
            placeholder="Telefone" 
            value={costumerPhone} 
            onChange={(e)=>{setCostumerPhone(e.target.value)}}
          />

          <input type="submit" value="Enviar"/>

        </FormWrapper>
      </form>
    </Container>
  );
}