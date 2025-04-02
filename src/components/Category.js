import React from 'react'
import "./Category.css"
import arrow from '../assets/arrow.png'
import design from '../assets/design.png'
import grid_arrow from '../assets/grid-arrow.png'
import sales from '../assets/Sales.png'
import marketing from '../assets/Marketing.png'
import white_arrow from '../assets/white-arrow.png'
import finance from '../assets/finance.png'
import tech from '../assets/tech.png'
import engineering from '../assets/engineering.png'
import business from '../assets/business.png'
import hr from '../assets/hr.png'
import dashboard from '../assets/dashboard.png'

export default function Category() {
    return (
        <div className='categories'>
            <div className='category-nav'>
                <div className='heading'>
                    <h1>Explore by</h1>
                    <h1 className='category'>category</h1>
                </div>
                <div className='inner-category'>
                    <a>Show all jobs</a>
                        <img src={arrow} width='10%' height="10%"/>
                </div>
            </div>
                <div className='grid'>
                    <div className='inside-grid'>
                        <div className='inside-img'>
                            <img src = {design}/>
                        </div>
                        <h3>Design</h3>
                        <div className='inside-inside-grid'>
                            <p>235 Jobs Availible</p>
                            <div className='inside-img'>
                                <img src = {grid_arrow} width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                    <div className='inside-grid'>
                        <div className='inside-img'>
                            <img src = {sales}/>
                        </div>
                        <h3>Sales</h3>
                        <div className='inside-inside-grid'>
                            <p>756 Jobs Availible</p>
                            <div className='inside-img'>
                                <img src = {grid_arrow} width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                    <div className='inside-grid marketing'>
                        <div className='inside-head-img'>
                            <img src = {marketing}/>
                        </div>
                        <h3>Marketing</h3>
                        <div className='inside-inside-grid'>
                            <p>140 Jobs Availible</p>
                            <div className='inside-img'>
                                <img src = {grid_arrow} width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                    <div className='inside-grid'>
                        <div className='inside-img'>
                            <img src = {finance}/>
                        </div>
                        <h3>Finance</h3>
                        <div className='inside-inside-grid'>
                            <p>325 Jobs Availible</p>
                            <div className='inside-img'>
                                <img src = {grid_arrow} width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                    <div className='inside-grid'>
                        <div className='inside-img'>
                            <img src = {tech}/>
                        </div>
                        <h3>Technology</h3>
                        <div className='inside-inside-grid'>
                            <p>436 Jobs Availible</p>
                            <div className='inside-img'>
                                <img src = {grid_arrow} width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                    <div className='inside-grid'>
                        <div className='inside-img'>
                            <img src = {engineering}/>
                        </div>
                        <h3>Engineering</h3>
                        <div className='inside-inside-grid'>
                            <p>542 Jobs Availible</p>
                            <div className='inside-img'>
                                <img src = {grid_arrow} width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                    <div className='inside-grid'>
                        <div className='inside-img'>
                            <img src = {business}/>
                        </div>
                        <h3>Business</h3>
                        <div className='inside-inside-grid'>
                            <p>211 Jobs Availible</p>
                            <div className='inside-img'>
                                <img src = {grid_arrow} width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                    <div className='inside-grid'>
                        <div className='inside-img'>
                            <img src = {hr}/>
                        </div>
                        <h3>Human Resource</h3>
                        <div className='inside-inside-grid'>
                            <p>346 Jobs Availible</p>
                            <div className='inside-img'>
                                <img src = {grid_arrow} width={30} height={30}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='posting'>
                    <div className='triangle'></div>
                    <div className='inside-posting'>
                        <h2>Start posting jobs today</h2>
                        <p>Start posting jobs only for $10.</p>
                        <button>Sign Up For Free</button>
                    </div>
                    <img src = {dashboard}/>
                    <div className='down-triangle'></div>
                </div>
        </div>
    )
}