import React from 'react';
import IconAnchor from '../../../assets/icons/IconAnchor';

const Anchor = () => {
    return (
        <div className="wrapper__anchor">
            <div className="anchor">
                <IconAnchor />
                <div className="anchor__items">
                    <a href="#abstract" className="anchor__item ">
                        Abstract
                    </a>
                    <a href="#benchmark_datasets" className="anchor__item">
                        Benchmark{<br />}datasets
                    </a>
                    <a href="#example" className="anchor__item">
                        All datasets
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Anchor;
