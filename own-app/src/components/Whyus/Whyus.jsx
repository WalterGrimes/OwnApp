import React from "react";
import s from './Whyus.module.css';

const Whyus = () => {
    return (
        <div>
            <div className={s.Whyus}>
                <div className={s.WhyusItem}>
                    <div className={s.benefits}>
                    First Advantage:
                    </div>
                    <div className={s.benefits}>
                    Second Advantage: 
                    </div>
                    <div className={s.benefits}>
                    Third Advantage:
                    </div>
                    <div className={s.benefits}>
                    Fourth Advantage: 
                    </div>
                </div>
                <div className={s.CelebrityReviews}>
                    <div className={s.review}>
                        Top Quality Products – Guaranteed 100% original and effective.
                    </div>
                    <div className={s.review}>
                    Endorsed by Celebrities – Trusted by Dwayne "The Rock" Johnson, Chris Hemsworth, and other top athletes.
                    </div>
                    <div className={s.review}>
                    Innovative Solutions – Cutting-edge designs and formulas.
                    </div>
                    <div className={s.review}>
                    Nationwide Leader – Recognized as the best in the country.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Whyus;
