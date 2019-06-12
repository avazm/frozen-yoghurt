import React from 'react';
import { config } from '../config/config';

export const FrozenYoghurtBuilder = () => {
    return (
        <div classNameName="frozen-yoghurt-builder">
            <div className="columns">
                <div className="column is-one-quarter">
                    <h4 className="title is-4">Elige el tamaño</h4>
                    <ul className="menu-list">
                        {config.sizes.map(size => (
                            <li>
                                <a className="" onclick={onClickOnSize(size.id)}
                                >{size.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="column">
                    <h4 className="title is-4">Añade los toppings</h4>
                    <div className="topping-categories">
                        <div className="topping-category">
                            <div className="topping-grid">
                                <div className="topping">{topping.label}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

//"{'is-active': model.sizeId === size.id}