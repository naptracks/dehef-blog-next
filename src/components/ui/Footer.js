import React, {Fragment} from "react";
import Image from "next/image";
import Container from "../layout/Container";
import {useData} from "../../context/LangContext";

const Footer = () => {
    const topBrands = ['TOP BRANDS', 'Flint and Tinder', 'Astorflex', 'Taylor Stitch', 'Timex', 'Topo Design']
    const topGoods = ['TOP GOODS', 'Watches', 'Clothing', 'Footwear', 'Everyday Carry']
    const ourStory = ['OUR STORY', 'Jobs', 'Affiliates', 'Gift Cards', 'Contact Us']
    const support = ['SUPPORT', 'Shipping and Delivery', 'Returns Policy', 'Privacy Policy']

    const data = useData().common.footer;

    const extraMenu = (array) => (
        <div className={'extra-menu-footer'}>
            <h4>{array[0]}</h4>
            {array.slice(1).map((link) => <p key={link}>{link}</p>)}
        </div>
    )


    return (
        <Fragment>
            <div className={'footer-container'}>
                <div className={'top-footer-container'}>
                    <Container content spaceBetween>
                        <div className={'marketing align-center'}>
                            <Image src={'/message.png'} alt={'message'} width={'27px'} height={'20px'}/>
                            <h4>{data.marketing.toUpperCase()}</h4>
                        </div>
                        <form className={'email align-center'}>
                            <input placeholder={data.placeholder}/>
                            <button><h4>{data.button.toUpperCase()}</h4></button>
                        </form>
                    </Container>
                </div>

                <div className={'bottom-footer-container'}>
                    <Container content>
                        <div className={'logo-footer-container'}>
                            <img src={'/logo-footer.png'} alt={'logo'}/>
                        </div>
                        <div className={'footer-links-container'}>
                            {extraMenu(topBrands)}
                            {extraMenu(topGoods)}
                            {extraMenu(ourStory)}
                            {extraMenu(support)}
                        </div>
                    </Container>
                </div>
                <div className={'socials-footer-container justify-center'}>
                    <Container content flexStart>
                        <img src={'/socials.png'} alt={'socials'}/>
                        <p>{data.copyrights}</p>
                    </Container>
                </div>
            </div>
        </Fragment>
    )
};

export default Footer;