import React from 'react'
import { Navigate, Route, Router, Routes } from 'react-router-dom'
import { AboutmeScreen } from '../components/aboutMe/AboutmeScreen'
import { CertificatesScreen } from '../components/certificates/CertificatesScreen'
import { ContactScreen } from '../components/contact/ContactScreen'
import { HomeScreen } from '../components/home/HomeScreen'
import { NavBar } from '../components/navBar/NavBar'
import { PortfolioAion } from '../components/portfolio/PortfolioAion'
import { PortfolioBr } from '../components/portfolio/PortfolioBr'
import { PortfolioCafe } from '../components/portfolio/PortfolioCafe'
import { PortfolioCalendario } from '../components/portfolio/PortfolioCalendario'
import { PortfolioCripto } from '../components/portfolio/PortfolioCripto'
import { PortfolioEcommerce } from '../components/portfolio/PortfolioEcommerce'
import { PortfolioFreeLance } from '../components/portfolio/PortfolioFreeLance'
import { PortfolioGastos } from '../components/portfolio/PortfolioGastos'
import { PortfolioGifs } from '../components/portfolio/PortfolioGifs'
import { PortfolioJS } from '../components/portfolio/PortfolioJS'
import { PortfolioJuego } from '../components/portfolio/PortfolioJuego'
import { PortfolioManga } from '../components/portfolio/PortfolioManga'
import { PortfolioOSPJ } from '../components/portfolio/PortfolioOSPJ'
import { PortfolioReact } from '../components/portfolio/PortfolioReact'
import { Portfolioscreen } from '../components/portfolio/Portfolioscreen'
import { PortfolioTodo } from '../components/portfolio/PortfolioTodo'
import { PortfolioVet } from '../components/portfolio/PortfolioVet'
import { SkillsetScreen } from '../components/skillset/SkillsetScreen'


export const RouterApp = () => {
  return (
    <Routes>
        <Route path='/' element={<NavBar />}>
            <Route index element={<HomeScreen />} />
            <Route path='skillset' element={<SkillsetScreen />} />
            <Route path='portfolio' element={<Portfolioscreen />} />
            <Route path='certificates' element={<CertificatesScreen />} />
            <Route path='about-me' element={<AboutmeScreen />} />
            <Route path='contact' element={<ContactScreen />} />
            <Route path='/js-portfolio' element={<PortfolioJS />} />
            <Route path='/react-portfolio' element={<PortfolioReact />} />
            <Route path='/Aion-Replica' element={<PortfolioAion />} />
            <Route path='/Real-Estate' element={<PortfolioBr />} />
            <Route path='/coffee' element={<PortfolioCafe />} />
            <Route path='/Ecommerce' element={<PortfolioEcommerce />} />
            <Route path='/Freelancer' element={<PortfolioFreeLance />} />
            <Route path='/Game' element={<PortfolioJuego />} />
            <Route path='/Comic' element={<PortfolioManga />} />
            <Route path='/OSPJ' element={<PortfolioOSPJ />} />
            <Route path='/Gifs' element={<PortfolioGifs />} />
            <Route path='/Cripto' element={<PortfolioCripto />} />
            <Route path='/Calendar' element={<PortfolioCalendario />} />
            <Route path='/Expense-Control' element={<PortfolioGastos />} />
            <Route path='/To-Do' element={<PortfolioTodo />} />
            <Route path='/Appointment-Scheduling' element={<PortfolioVet />} />
            <Route path='*' element={<Navigate to='/' />} />
        </Route>
    </Routes>
  )
}
