import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import AdminDashboard from '../../Components/AdminDashboard/AdminDashboard'

function AdminPage() {
    return (
        <>
            <Navbar />
            <AdminDashboard/>
            <Footer />
        </>
    )
}

export default AdminPage
