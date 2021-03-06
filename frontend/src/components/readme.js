import React, { Component } from 'react';
import Title from './Title';

export default class ReadMe extends Component {
    render() {
        return (
            <html>
                <body>

                    <div className="Login col-10 mx-auto" style={{ width: "40%", marginTop: "5%", padding: "30px", borderRadius: "35px", border: "solid 1px gray" }}>
                        <Title name="Read Me " title="File" />
                        <ul>
                            <li><b>My name:</b> Dana Feder 311308266 </li>
                            <li><b>Store name:</b> SOCKIT </li>
                            <li><b>What are you selling:</b> We are selling colorful and cool unisex socks </li>
                            <li><b>What additional page(s) did you add and how to operate them?</b>
                                <ol>
                                    <li>Sign in/Log in page - appears automaticly while entering the websit or after clicking on "Sign Out" button on the navigation bar</li>
                                    <li>Products page - clicking on the Logo or on "Products" on the navigation bar</li>
                                    <li>Product details page - by clicking on any product card from the Product page</li>
                                    <li>Add to cart modal - appear when adding item to the cart</li>
                                    <li>Cart page - entering this page by clicking on "Cart" on the nevigation bar or "Go to cart" button in the modal after adding item to the cart</li>
                                    <li>Aboute us - page that describes our company, enter from the nevifation bar by clickin "About us"</li>
                                    <li>Admin page - the button "Admin" on the navigation bar appears only when the admin is logged in and entering this page by clicking this button</li>
                                    <li>404 page - while trying to move to route that not exist</li>
                                </ol>
                            </li>
                            <li><b>What was hard to do:</b> Learn React alone and build the website using new framework</li>
                            <li><b>Who is your partner:</b> Eylon Goor 305789182</li>
                            <li><b>What did you do and what did your partner do?</b> I worked mainly on the frontend and Eylon worked mainly on the backend</li>
                            <li><b>Specify all the different route your app supports:</b>
                                <ol>
                                    <li>"/"</li>
                                    <li>"/products"</li>
                                    <li>"/about"</li>
                                    <li>"/details"</li>
                                    <li>"/cart"</li>
                                    <li>"/register"</li>
                                    <li>"/admin"</li>
                                    <li>"/default" - any other URL that nod exist will map to 404 page</li>
                                </ol>
                            </li>
                            <li><b>How did you make your store secured?</b> Protected against DDoS with sessions limitation, and secured payment with PayPal.</li>
                            <li><b>Did you implement the store using react.js?</b> Yes</li>
                        </ul>

                    </div>

                </body>
            </html>
        )
    }
}