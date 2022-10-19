import {ContainerLi} from './PizzaCard.styled'


function PizzaCard(props) {
    const { pizza, addToCart } = props

    return (
        <ContainerLi>
            <h3>{pizza.name}</h3>
            <p className="card-price">
                {pizza.price.toLocaleString(
                    'pt-br',
                    { style: 'currency', currency: 'USD' }
                )}
            </p>
            <p>
                {pizza.ingredients.map((item) => {
                    return (
                        <span key={item}>{`${item} `}</span>
                    )
                })}
            </p>
            <button onClick={() => addToCart(pizza)}>Adicionar no carrinho</button>
        </ContainerLi>
    )
}

export default PizzaCard