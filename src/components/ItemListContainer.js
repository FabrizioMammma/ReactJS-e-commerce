import './ItemListContainer.css';

function ItemListContainer({greeting}){
    return(
        <div className="itemListContainer">
            <h1>{greeting}</h1>
        </div>
    );
};

export default ItemListContainer;