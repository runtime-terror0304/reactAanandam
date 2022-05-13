import React, { useEffect } from 'react';

// import {useHistory} from 'react-router-dom';

import Home from '../home/Home';

import axios from 'axios';

import "./style.scss"

const getLocalData = () => {
    const userData = localStorage.getItem("dat")

    if(userData)
    {
        return(JSON.parse(userData));
    }
    else{
        //console.log('jholA');
        window.location.href = '/login';
    }
}

const gotoPage = () => {
    window.location.href = '/';
}

const Service = () => {

    // const history = useHistory();
    const[loggedout, setLoggedout] = React.useState(false);

    const [services, setServices] = React.useState([]);

    const [userdata, setUserdata] = React.useState(getLocalData());

    const logout = () => {
        const choice = prompt('Do you want to log out ? (Y for Yes/N for No)');
    
        if(choice === 'Y')
        {
            localStorage.removeItem('dat');
            setUserdata({accessToken: null});
            console.log('hola');
            console.log(userdata);
            alert('You are logged out!');
        }
        else if(choice === 'N')
        {
            alert('Okay Cool!');
        }
        else{
            alert('Please enter a valid input!');
        }
    }

    useEffect(() => {
        axios.get('https://lit-caverns-66323.herokuapp.com/hotelservices').then((response) => {
            // console.log(response);
            console.log(response.data.hotelServices);
            setServices(response.data.hotelServices);
            //console.log(rooms);
            //console.log(typeof(rooms));
            console.log('hello');
            console.log(userdata);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    // useEffect(() => {
    //     //setUserdata(getLocalData());
    //     if(userdata.accessToken == null)
    //     {
    //         console.log('hingo');
    //         window.location.href = '/login';
    //     }
    // }, [userdata]);

  return (
        <div className="wrapper">
            <div className="top__header">
                <div className="icon__menu">
                    <div className="menu__desktop">
                        <ul className="desktop__menu">
                            <li className="promo">Anandam</li>
                            <li className="promo" onClick={() => gotoPage()}>Rooms</li>
                            <li onClick={() => logout()}>{userdata === null ? null : userdata.user.username}</li>
                        </ul>
                    </div>
                </div>
                <h3>Services</h3>
            </div>

            <div className="cards">
    
                {
                    services.map((service) => {
                        return (
                            <>
                            <div className="card" key={service._id}>
                                <div className="card__img">
                                    <picture>
                                        <source media="(max-width: 320px)" srcSet="https://source.unsplash.com/random/335x200/?Services">
                                        </source>

                                        <source media="(min-width: 538px)" srcSet="https://source.unsplash.com/random/500x200/?Services">
                                        </source>

                                        <img src="https://source.unsplash.com/random/335x200/?Services">
                                        </img>
                                    </picture>
                                </div>
                                <div className="card__details">
                                    <h3 htmlFor="cozyroom">{service.serviceName}</h3>
                                    <div className="address">{service.description}</div>
                                    <div className="price">
                                        <div className="star">
                                            <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt=""></img>
                                            <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt=""></img>
                                            <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt=""></img>
                                            <img src="https://image.flaticon.com/icons/svg/291/291205.svg" alt=""></img>
                                        </div>
                                        <div className="price__l">
                                            <span className="price__label">{`INR 100 /`}</span>
                                            <span className="measure__label">avail</span>
                                        </div>
                                    </div>
                                    <button>Detail</button>
                                </div>
                            </div>
                            </>
                        )
                    })
                }

            </div>
        </div>
  )
}

export default Service;