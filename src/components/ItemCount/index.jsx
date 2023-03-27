import React from 'react';
import { useState } from 'react';
import Button from '../Button';

function Counter({ initialValue, stock, addToCart }) {

    const [count, setCount] = useState(1);

    const increaseCount = () => {
        if (stock > count) {
            setCount(count + 1);
        };
    };

    const decreaseCount = () => {
        if (initialValue < count) {
            setCount(count - 1);
        };
    };


    return (
        <div>
            <Button onTouch={decreaseCount}>
                -
            </Button>
            <span> {count} </span>
            <Button onTouch={increaseCount}>
                +
            </Button>
            <Button onTouch={() => addToCart(count)}>Agregar al carrito</Button>
        </div>

    )
}

export default Counter;