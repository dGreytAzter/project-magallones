import React from 'react'
import Services01 from '../assets/images/single_service_01.jpg'
import Services02 from '../assets/images/single_service_02.jpg'
import Services03 from '../assets/images/single_service_03.jpg'
import Services04 from '../assets/images/single_service_04.jpg'
import Article from './Article'

const AllServices = () => {
    return (
        <div class="single-services">
        <div class="container">
            <div class="row" id="tabs">
            <div class="col-md-4">
                <ul>
                <li><a href='#tabs-1'>DTI Registration <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-2'>SEC Application <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-3'>Mayor's Permit Application <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-4'>BIR Registration/Update/Closure <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-5'>Bookkeeping <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-6'>Auditing <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-7'>Tax Compliance <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-8'>Lot Titling <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-9'>DAR Clearance Estate Tax Clearance <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-10'>Capital Gain Tax <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-10'>SSS, Philhealth, Pagibig Application <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-12'>PSA Services <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-13'>PhilGEPS <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-14'>Tax Clearance <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-15'>Building Permit <i class="fa fa-angle-right"></i></a></li>
                <li><a href='#tabs-16'>Occupancy Permit <i class="fa fa-angle-right"></i></a></li>
                </ul>
            </div>
            <div class="col-md-8">
                <section class='tabs-content'>
                    <article id='tabs-1'>
                        <Article
                        img={Services01}
                        servicesName="DTI Registration"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-2'>
                        <Article
                        img={Services02}
                        servicesName="SEC Application"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-3'>
                        <Article
                        img={Services03}
                        servicesName="Mayor's Permit Application"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-4'>
                        <Article
                        img={Services04}
                        servicesName="BIR Registration/Update/Closure"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-5'>
                        <Article
                        img={Services01}
                        servicesName="Bookkeeping"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-6'>
                        <Article
                        img={Services02}
                        servicesName="Auditing"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-7'>
                        <Article
                        img={Services03}
                        servicesName="Tax Compliance"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-8'>
                        <Article
                        img={Services04}
                        servicesName="Lot Titling"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-9'>
                        <Article
                        img={Services01}
                        servicesName="DAR Clearance Estate Tax Clearance"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-10'>
                        <Article
                        img={Services02}
                        servicesName="Capital Gain Tax"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-11'>
                        <Article
                        img={Services03}
                        servicesName="SSS, Philhealth, Pagibig Application"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-12'>
                        <Article
                        img={Services04}
                        servicesName="PSA Services"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-13'>
                        <Article
                        img={Services01}
                        servicesName="PhilGEPS"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-14'>
                        <Article
                        img={Services02}
                        servicesName="Tax Clearance"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-15'>
                        <Article
                        img={Services03}
                        servicesName="Building Permit"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                    <article id='tabs-16'>
                        <Article
                        img={Services04}
                        servicesName="Occupancy Permit"
                        p="Integer vehicula sapien quis dolor efficitur, eget molestie eros tempus. Curabitur sollicitudin, tortor at suscipit volutpat, nisi arcu aliquet dui, vitae semper sem turpis quis libero. Quisque vulputate lacinia nisl ac lobortis. Ut ultricies maximus turpis, in sollicitudin ligula posuere vel. 
                        <br /><br />Donec finibus maximus neque, vitae egestas quam imperdiet nec. Proin nec mauris eu tortor consectetur tristique. Etiam suscipit ante a odio consequat, in ornare lacus suscipit. Cras ac libero massa. Quisque rhoncus velit feugiat vulputate mollis. Donec nisl eros, malesuada sed nisi id, condimentum condimentum quam."
                        />
                    </article>
                </section>
            </div>
            </div>
        </div>
        </div>

        
    )
}

export default AllServices