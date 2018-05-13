import React from 'react';
import SixMaca from '../assets/images/macarons-image.png';
import '../assets/css/mainBody.css';

export default () => (
    <div>
        {/* <img src={QuadMaca} className=""/> */}
        <div className="container desktop-views">
            <div className="hide-on-med-and-down left six-maca-desktop">
                <img src={SixMaca} alt="Desktop Macarons"/>
            </div>
            <div>
                <h5>Welcome to MBoutique!</h5>
                <p>We're a home-based baking business that specializes in French macarons, a gluten free pastry item made from ground almonds. Our business began at the West Reading Farmers Market in 2011. Last year (2017) marked our seventh and final season of participation at the market. MBoutique was established to pay homage to the delicate French confectionery, the macaron. Our shop has been recognized as the connoisseur of this delicious French pastry because of the wonderful variety of flavors from our great master chefs.</p>
                <h5>We Love Macarons!</h5>
                <p>Renowned macarons, French delights of the moment can be met in a variety of flavors and colors and are brilliant, precisely because of their simplicity - a crispy coating but delicate in a loose blanketjam, with a chocolate butter cream spread that invites you in for another bite. Macarons combine perfectly with champagne or white wine, tea or hot chocolate, fresh juices and coffee which guarantee that these little delights soon become an addiction that you cannot break. Find your favorite flavor today!</p>
                {/* <h5>New Samples Avaliable Daily!</h5>                 */}
            </div>
        </div>          
    </div> 
);