import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Item.css'
import { Link } from 'react-router-dom';

function Item({ info }) {

    return (
        <div className='cards'>
            <div className='card card-effect'>
                <img src={info.image} className='card-img-top card-img-size' />
                <div className='card-body'>
                    <h5 className='card-title'>{info.name}</h5>
                    <p className='card-text'>{info.description}</p>
                    <Link className='btn btn-primary' to={`/detalle/${info.id}`}>See more</Link>
                </div>
            </div>
        </div>


    );
};

export default Item;

