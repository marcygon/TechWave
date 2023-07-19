import React from 'react'
import AccountInfo from '../../Components/AccountInfo/AccountInfo'
import Footer from '../../Components/Footer/Footer'
import JoinedEvents from '../../Components/JoinedEvents/JoinedEvents'
import Navbar from '../../Components/Navbar/Navbar'

function AccountPage() {
    return (
        <>
            <Navbar />
            <AccountInfo />
            <JoinedEvents />
            <Footer />
        </>
    )
}

export default AccountPage
