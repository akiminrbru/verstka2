import React, {FC} from 'react';
import styles from './Main.module.scss';
import mainPhoto1 from '../../assets/img/main1.png';
import mainPhoto2 from '../../assets/img/main2.png'
import line2 from '../../assets/img/line2.svg';

interface MainProps {
}

const Main: FC<MainProps> = () => (
    <main className={styles.main}>
        <div className={styles.main__container}>
            <div className={styles.main__inner}>
                <section className={styles.main__section1}>
                    <h2>Instant Team Chats</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Non facilisi consectetur proin ornare enim sed erat ac
                        dictum. Arcu id ultrices in a donec viverra. Vulputate
                        odio vel mus purus auctor phasellus. Id auctor tristique
                        massa elit at gravida tincidunt elit nunc. Faucibus gravida
                        cras gravida neque, velit augue id. At ullamcorper ultrices
                        in id lacus libero tellus. Mi netus amet laoreet lectus eget in.
                        Mi, mauris nullam odio gravida. <br/> <br/>
                        Eget libero pellentesque mauris integer libero donec a mattis tellus.
                        Eget id non tortor ac, elementum. Consectetur nulla ultricies risus
                        nibh eget egestas molestie ultrices hendrerit. Nibh risus, sed tortor
                        in mattis ac cursus. Velit eget consectetur eu enim blandit. Nunc eget
                        volutpat eu quis. Enim vestibulum, viverra eget eget egestas ornare cursus.
                        Erat pellentesque tempus pellentesque parturient id donec quam morbi.
                        Venenatis maecenas nec non nec dignissim mi. Elementum vel, pretium
                        laoreet quam nulla commodo. Accumsan in ut dis fusce maecenas dolor
                        blandit varius. Imperdiet viverra amet nunc suspendisse. Porttitor
                        sed amet arcu tortor nibh tincidunt.
                    </p>
                </section>
                <section className={styles.main__section2}>
                    <img src={mainPhoto1} alt="mainPhoto1"/>
                </section>
                <section className={styles.main__section3}>
                    <div className={styles.main__section3__image}>
                        <img src={mainPhoto2} alt="mainPhoto2"/>
                    </div>
                    <div>
                        <img src={line2} alt="line2"/>
                    </div>
                    <div>
                        <h2>
                            Perfect Fit <br/>
                            For Small Businesses <br/>
                            & <br/>
                            Startups <br/>
                        </h2>
                        <p>Affordable pricing and customizable plans for <br/>
                            individual business needs.</p>
                        <div className={styles.main__btns}>
                            <button className={styles.main__btns__btn1}>Try it Free</button>
                            <button className={styles.main__btns__btn2}>Get a Demo</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </main>
);

export default Main;