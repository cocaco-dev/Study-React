import React from 'react';
import {shallow} from 'enzyme';
import { GifExpertApp } from "../GifExpertApp"

describe('Debemos realizar pruebas a <GifExpertApp/>', () => {

    test('Match con el Snapshot ', () => {
        const wrapper = shallow(<GifExpertApp/>)
        expect(wrapper).toMatchSnapshot();

    })
    
    test('Debe de mostrar una lista de categorias', () => {
        const categories = ['One Punch', 'Dragon Ball', 'Dota'];
        const wrapper = shallow(<GifExpertApp defaultCategories = {categories}/>);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('GifGrid').length).toBe(categories.length);
    })
    

});