import React, { useState } from 'react';
import { config } from '../config/config';
import classnames from 'classnames';
import './FrozenYoghurtBuilder.scss';

export const FrozenYoghurtBuilder = ({ onSubmit }) => {
    const [selectedSizeId, setSelectedSizeId] = useState('');
    const [selectedToppingIds, setSelectedToppingIds] = useState([]);

    const toggleSelectedTopping = (toppingId) => {
        const indexOfToppingId = selectedToppingIds.indexOf(toppingId);
        if (indexOfToppingId !== -1) {
            const newSelectedToppingIds = [...selectedToppingIds];
            newSelectedToppingIds.splice(indexOfToppingId, 1);
            setSelectedToppingIds(newSelectedToppingIds)
        } else {
            setSelectedToppingIds([...selectedToppingIds, toppingId]);
        }
    }

    const onClickOnSend = () => {
        if (!selectedSizeId || !selectedToppingIds.length) {
            return;
        }
        onSubmit && onSubmit({ selectedSizeId, selectedToppingIds });
        setSelectedSizeId('');
        setSelectedToppingIds([]);
    }

    const isToppingIdSelected = (toppingId) => selectedToppingIds.indexOf(toppingId) !== -1;

    return (
        <div className="frozen-yoghurt-builder">
            <div className="columns">
                <div className="column">
                    <h4 className="title is-4">Elige el tamaño</h4>
                    <ul className="menu-list size-menu">
                        {config.sizes.map(size => (
                            <li key={size.id}>
                                <a href="#" className={classnames({ 'is-active': selectedSizeId === size.id })} onClick={() => setSelectedSizeId(size.id)}>{size.label}</a>
                            </li>
                        ))}
                    </ul>
                    <h4 className="title is-4">Añade los toppings</h4>
                    <div className="topping-categories">
                        {config.toppingMainCategories.map(toppingMainCategory => (
                            <div key={toppingMainCategory.id} className="topping-category">
                                <strong>{toppingMainCategory.label}</strong>
                                <div className="topping-grid">
                                    {config.toppings.filter(topping => topping.mainCategoryId === toppingMainCategory.id).map(topping => (
                                        <div onClick={() => toggleSelectedTopping(topping.id)} key={topping.id} className={classnames('topping', { 'is-active': isToppingIdSelected(topping.id) })}>{topping.label}</div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="columns">
                <div className="column is-flex actions">
                    <button onClick={() => onClickOnSend()} className="button">Enviar</button>
                </div>
            </div>
        </div>
    );
}