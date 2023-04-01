import React, { useState } from "react";
import { useContext } from "react";
import cartContext from "../../Context/cartContext";
import './checkoutform.css'

function CheckoutForm(props) {

    const { clearCart } = useContext(cartContext);
    const [buyerData, setBuyerData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    function handleChange(evt) {
        const value = evt.target.value;
        const input = evt.target.name;
        const newBuyerData = { ...buyerData };
        newBuyerData[input] = value;
        setBuyerData(newBuyerData);
    }

    function clearForm() {
        setBuyerData({
            name: "",
            email: "",
            phone: "",
        });
    };

    function submitData() {
        props.onSubmit(buyerData);
        clearCart();
    };

    return (
        <div className="div-container-form">
            <h2 className="letters">Fill in the details to finalize the purchase:</h2>
            <div>
                <label className="letters">Name:</label>
                <input
                    value={buyerData.name}
                    name="name"
                    type="text"
                    required
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="letters">Email:</label>
                <input
                    value={buyerData.email}
                    name="email"
                    type="email"
                    required
                    onChange={handleChange}
                />
            </div>

            <div>
                <label className="letters">Phone:</label>
                <input
                    value={buyerData.phone}
                    name="phone"
                    type="text"
                    required
                    onChange={handleChange}
                />
            </div>
            <div className="div-button">
                <button className="button-form"
                    disabled={
                        !(
                            buyerData.name !== "" &&
                            buyerData.phone !== "" &&
                            buyerData.email !== ""
                        )
                    }
                    onClick={submitData}
                >
                    Create order
                </button>
            </div>
            <button className="button-form" onClick={clearForm}>Clean form</button>
        </div>
    );
}

export default CheckoutForm;