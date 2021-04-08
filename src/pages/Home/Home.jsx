import { Container, CardCostumer } from "./styles";


export function Home ({props}) {
  return (
    <Container>
      <div className="row">

        {props.Costumer ? (
          props.Costumer.map((item)=> (
            <div className="column"  key={item.phone}>
              <CardCostumer>
                <div>Nome: {item.name}</div>
                <div>Email: {item.email}</div>
                <div>Telefone: {item.phone}</div>
              </CardCostumer>
            </div>
          ))
        ) : <h2>Sem clientes cadastrados</h2> }

      </div>
      

    </Container>
  )
}