import React from 'react'
import arrow from '../assets/arrow.png'
import "./Featured.css"
import R from '../assets/R.png'
import dot from '../assets/dot.png'
import brand from '../assets/brand.png'
import pitch from '../assets/pitch.png'
import visual from '../assets/visual.png'
import product from '../assets/product.png'
import lead from '../assets/lead.png'
import strategy from '../assets/strategy.png'
import analyst from '../assets/analyst.png'

export default function Featured() {
  return (
    <div className='featured_jobs'>
        <div className='jobs-nav'>
            <div className='heading'>
                <h1>Featured</h1>
                <h1 className='jobs'>jobs</h1>
            </div>
            <div className='inner-jobs'>
                <a>Show all jobs</a>
                <img src={arrow} width='10%' height="10%"/>
            </div>
        </div>
        <div className='grid'>
            <div className='grid-elems'>
                <div className='grid-logo'>
                    <img src={R}/>
                    <div className='fulltime'>Full Time</div>
                </div>
                <h2>Email Marketing</h2>
                <div className='location'>
                    <p>Revoult</p>
                    <img src={dot} height={5} width={5}/>
                    <p>Madrid, Spain</p>
                </div>
                <p>Revoult is looking for email marketing to help team ma...</p>
                <div className='buttons'>
                    <button className='yellow'>Marketing</button>
                    <button className='green'>Design</button>
                </div>
            </div>
            <div className='grid-elems'>
                <div className='grid-logo'>
                    <img src={brand}/>
                    <div className='fulltime'>Full Time</div>
                </div>
                <h2>Brand Designer</h2>
                <div className='location'>
                    <p>Dropbox</p>
                    <img src={dot} height={5} width={5}/>
                    <p>San Fransisco, US</p>
                </div>
                <p>Dropbox is lookiing for Brand Designer for help the team t...</p>
                <div className='buttons'>
                    <button className='green'>Design</button>
                    <button className='purple'>Business</button>
                </div>
            </div>
            <div className='grid-elems'>
                <div className='grid-logo'>
                    <img src={pitch}/>
                    <div className='fulltime'>Full Time</div>
                </div>
                <h2>Email Marketing</h2>
                <div className='location'>
                    <p>Pitch</p>
                    <img src={dot} height={5} width={5}/>
                    <p>Berlin, Germany</p>
                </div>
                <p>Pitch is looking for Customer Manager to join marketing t...</p>
                <div className='buttons'>
                    <button className='yellow'>Marketing</button>
                </div>
            </div>
            <div className='grid-elems'>
                <div className='grid-logo'>
                    <img src={visual}/>
                    <div className='fulltime'>Full Time</div>
                </div>
                <h2>Visual Designer</h2>
                <div className='location'>
                    <p>Blinklist</p>
                    <img src={dot} height={5} width={5}/>
                    <p>Granada, Spain</p>
                </div>
                <p>Blinkist is looking for Visual Designer to help team desi...</p>
                <div className='buttons'>
                    <button className='green'>Design</button>
                </div>
            </div>
            <div className='grid-elems'>
                <div className='grid-logo'>
                    <img src={product}/>
                    <div className='fulltime'>Full Time</div>
                </div>
                <h2>Product Designer</h2>
                <div className='location'>
                    <p>ClassPass</p>
                    <img src={dot} height={5} width={5}/>
                    <p>Manchester, UK</p>
                </div>
                <p>ClassPass is looking for Product Designer to help us...</p>
                <div className='buttons'>
                    <button className='yellow'>Marketing</button>
                    <button className='green'>Design</button>
                </div>
            </div>
            <div className='grid-elems'>
                <div className='grid-logo'>
                    <img src={lead}/>
                    <div className='fulltime'>Full Time</div>
                </div>
                <h2>Lead Designer</h2>
                <div className='location'>
                    <p>Canva</p>
                    <img src={dot} height={5} width={5}/>
                    <p>Ontario, Canada</p>
                </div>
                <p>Canva is looking for Lead Designer to help develop n...</p>
                <div className='buttons'>
                    <button className='green'>Design</button>
                    <button className='purple'>Business</button>
                </div>
            </div>
            <div className='grid-elems'>
                <div className='grid-logo'>
                    <img src={strategy}/>
                    <div className='fulltime'>Full Time</div>
                </div>
                <h2>Brand Strategist</h2>
                <div className='location'>
                    <p>GoDaddy</p>
                    <img src={dot} height={5} width={5}/>
                    <p>Marseille, France</p>
                </div>
                <p>GoDaddy is looking for Brand Strategist to join the team...</p>
                <div className='buttons'>
                    <button className='yellow'>Marketing</button>
                </div>
            </div>
            <div className='grid-elems'>
                <div className='grid-logo'>
                    <img src={analyst}/>
                    <div className='fulltime'>Full Time</div>
                </div>
                <h2>Data Analyst</h2>
                <div className='location'>
                    <p>Twitter</p>
                    <img src={dot} height={5} width={5}/>
                    <p>San Diego, US</p>
                </div>
                <p>Twitter is looking for Data Analyst to hep team desi...</p>
                <div className='buttons'>
                    <button className='orange'>Technology</button>
                </div>
            </div>
        </div>
    </div>
  )
}