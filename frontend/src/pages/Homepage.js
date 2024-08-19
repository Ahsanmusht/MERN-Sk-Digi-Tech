import React from 'react';
import {Navbar} from './Navbar'
import {Home} from './Home'
import "./HomePage.css"
import { Services } from './Services';

const Homepage = () => {
    return (

       <>

            <Navbar />
            <Home />
            <Services />


           
                              
                            {/* <StyledText>
                                Don't have an account?{' '}
                                <Link to="/Adminregister" style={{color:"#550080"}}>
                                    Sign up
                                </Link>
                            </StyledText> */}
                        
        </>
    );
};

export default Homepage;


