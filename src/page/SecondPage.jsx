import React from 'react';
import s from '../styles/SecondPage.module.css'
import left from "../assets/Vector.png";
import right from "../assets/Vector.svg";

const SecondPage = () => {
    return (
        <div className={s.container}>
            <div className={s.main_title}>
                Кейсы
            </div>
            <div>
                <div className={s.ball}></div>
                <div className={s.ball}></div>
                <div className={s.ball}></div>
            </div>
            <div className={s.laptop_box}>
                <div className={s.laptop_img}>
                    <div className={s.laptop_img_item}></div>

                </div>
            </div>
            <div className={s.shadow_laptop}></div>
            <div className={s.box}>
                <div className={s.text_title}>Создание маркетплейса для бизнеса по перепродаже одежды</div>
                <div className={s.text_header}>Brands&Charity — благотворительная онлайн — платформа для перепродажи брендовых вещей, цель которой превратить ненужные одним людям вещи в полезный ресурс для других.
                </div>
                <div className={s.left_arrow_box}>
                    <img src={left} alt="#" className={s.arrow_link_img}/>
                </div>
                <div className={s.right_arrow_box}>
                    <img src={right} alt="#" className={s.arrow_link_img}/>
                </div>
                <ul className={s.tab_container}>

                    <li className={s.list_item}>
                        <div className={s.title_tab_text}>Направление</div>
                        <div className={s.second_title_tab_text}>WEB-разработка</div>
                    </li>
                    <li className={s.list_item}>
                        <div className={s.title_tab_text_second}>Тип проекта</div>
                        <div className={s.second_title_tab_text_two}>Интернет-магазины</div>
                    </li>
                    <li className={s.list_item}>
                        <div className={s.title_tab_text_third}>Отрасль</div>
                        <div className={s.second_title_tab_text_third}>Торговля</div>
                    </li>

                </ul>

            </div>
        </div>
    );
};

export default SecondPage;
