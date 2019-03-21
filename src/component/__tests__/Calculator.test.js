import React from 'react';
import {shallow} from 'enzyme';
import Calculator from '../Calculator';
import '../setupTests';

it('shows the calculator has been rendered', ()=>{
    const wrapped = shallow(<Calculator />);
    expect(wrapped.find(<h2>SIMPLE CALCULATOR</h2>).length).toEqual(1);

})