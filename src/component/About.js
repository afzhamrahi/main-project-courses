import React from 'react';
import { Link , Outlet} from 'react-router-dom';
export default function About() {
        return (
            <div >

                <h3 style={{textAlign:"center"}} > Welcome to about page </h3>


            <div style={{display:"flex" , justifyContent:"space-evenly"}}>
                <Link to="Setting">Setting</Link>
                <Link to="Dashbord">Dashbord</Link>
            </div>

            <hr />
            <Outlet/>
            </div>
        );
}

// sabRoute برای outlet استفاده از 
// ها را رندر میکندsabRoute برای ما outlet در این حالت   

// sabRoute اصلی درون روتی که component به این صورت که در 
// ایجاد میکنیم و قرار میدهیمRoute ان تگ  Route برای ان تنظیم کردیم درون تگ 

// ایمپورت میکنیم outlet رندر بشه sabRoute و در کامپوننتی که باید 
// فرا خوانی میکنیم div و در همان کامپوننت قبل از بستن تگ 