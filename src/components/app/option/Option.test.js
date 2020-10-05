import * as React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Option from './Option';

Enzyme.configure({ adapter: new Adapter() });

describe('<Option />', () => {
    it('renders Option component', () => {
        const component = shallow(<Option option={'Option name'} />);
        expect(component.find('li')).toHaveLength(1);
        expect(component.find('LinkButton')).toHaveLength(1);
    });
});