
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import OptionList from './Option-List';

Enzyme.configure({ adapter: new Adapter() });

describe('<OptionList />', () => {
    it('renders items of OptionList component', () => {
      // Arrange
      const options = ['First', 'Second'];
      // Act
      const component = shallow(<OptionList options={options} />);
      // Assert
      expect(component.find('li')).toHaveLength(2);
    });
});