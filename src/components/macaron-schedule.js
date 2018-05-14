import React from 'react';
import Weekly from './weekly';
import Rose from '../assets/images/rose.png';
import Lemon from '../assets/images/lemon.png';
import Almond from '../assets/images/almond.png';
import WeeklyColored from './weekly-colored';
import Coffee from '../assets/images/coffee.png';
import Coconut from '../assets/images/coconut.png';
import Vanilla from '../assets/images/vanilla.png';
import Caramel from '../assets/images/caramel.png';
import GreenTea from '../assets/images/green-tea.png';
import Raspberry from '../assets/images/raspbery.png';
import Chocolate from '../assets/images/chocolate.png';
import Pistachio from '../assets/images/pistachio.png';
import Tiffany from '../assets/images/tiffany-blue.png';
import Violet from '../assets/images/violet-cassis.png';
import Passion from '../assets/images/passion-fruit.png';
import '../assets/css/mainBody.css';


export default () => (
    <div className="container desktop-width">
        <h5 className="samples-header">New Samples Avaliable Daily!</h5>
        <div className="hide-on-med-and-down desktop-settings">
            <WeeklyColored time={'3:00 - 4:00 PM'} date={'Monday'} flavor1={'chocolate'} flavor2={'coconut'} img1={Chocolate} img2={Coconut} color={'brownColor'}/>
            <Weekly time={'2:00 - 3:00 PM'} date={'Tuesday'} flavor1={'violet cassis'} flavor2={'green tea'} img1={Violet} img2={GreenTea} color={'lavenderColor'}/>
            <WeeklyColored time={'09:00 - 10:00 PM'} date={'Wednesday'} flavor1={'passion fruit'} flavor2={'vanilla'} img1={Passion} img2={Vanilla} color={'pinkColor'}/>
            <Weekly time={'6:00 - 7:00 PM'} date={'Thursday'} flavor1={'coffee'} flavor2={'pistachio'} img1={Coffee} img2={Pistachio} color={'coffeeColor'}/>
            <WeeklyColored time={'11:00 - 12:00 AM'} date={'Friday'} flavor1={'raspberry'} flavor2={'lemon'} img1={Raspberry} img2={Lemon} color={'maroonColor'}/>
            <Weekly time={'1:00 - 2:00 PM'} date={'Saturday'} flavor1={'rose'} flavor2={'tiffany blue'} img1={Rose} img2={Tiffany} color={'lightPinkColor'}/>
            <WeeklyColored time={'10:00 - 11:00 AM'} date={'Sunday'} flavor1={'caramel'} flavor2={'almond'} img1={Caramel} img2={Almond} color={'goldColor'}/>           
        </div>

        <div className="show-on-med-and-down hide-on-large-only mobile-views">
            <WeeklyColored time={'3:00 - 4:00 PM'} date={'Monday'} flavor1={'chocolate'} flavor2={'coconut'} img1={Chocolate} img2={Coconut} color={'brownColor'}/>
            <Weekly time={'2:00 - 3:00 PM'} date={'Tuesday'} flavor1={'violet cassis'} flavor2={'green tea'} img1={Violet} img2={GreenTea} color={'lavenderColor'}/>
            <WeeklyColored time={'09:00 - 10:00 PM'} date={'Wednesday'} flavor1={'passion fruit'} flavor2={'vanilla'} img1={Passion} img2={Vanilla} color={'pinkColor'}/>
            <Weekly time={'6:00 - 7:00 PM'} date={'Thursday'} flavor1={'coffee'} flavor2={'pistachio'} img1={Coffee} img2={Pistachio} color={'coffeeColor'}/>
            <WeeklyColored time={'11:00 - 12:00 AM'} date={'Friday'} flavor1={'raspberry'} flavor2={'lemon'} img1={Raspberry} img2={Lemon} color={'maroonColor'}/>
            <Weekly time={'1:00 - 2:00 PM'} date={'Saturday'} flavor1={'rose'} flavor2={'tiffany blue'} img1={Rose} img2={Tiffany} color={'lightPinkColor'}/>
            <WeeklyColored time={'10:00 - 11:00 AM'} date={'Sunday'} flavor1={'caramel'} flavor2={'almond'} img1={Caramel} img2={Almond} color={'goldColor'}/>     
        </div>
        
    </div>
);