import React from 'react'
import {MDBFooter,MDBContainer} from 'mdbreact'

const Footer = () =>{
    return (
        <MDBFooter color="black" className="font-large">
            <div className = "footer-copyright text-center py-3">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Made With 💖 by <a href="mailto:info@mike-harley.tech">Mike Harley</a>
                </MDBContainer>
            </div>
        </MDBFooter>


    )
}
export default Footer