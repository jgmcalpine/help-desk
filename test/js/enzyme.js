const expect = require('expect');
const React = require('react');
import Square from '../../src/components/Square';
import { shallow } from 'enzyme';
import sinon from 'sinon';
// Enzyme is a wrapper around React test utilities which makes it easier to
// shallow render and traverse the shallow rendered tree.

describe('React unit tests', () => {
  describe('<Square />', () => {
    let wrapper;
    let clickSpy;

    before(() => {
      clickSpy = sinon.spy();
      // wrapper = shallow(<Square row={0} square={1} letter="X" handleClick={() => {}} />);
      wrapper = shallow(<Square row={0} square={1} letter="X" handleClick={clickSpy} />);
    });

    it('Renders a <div> with class "square"', () => {
      expect(wrapper.text()).toEqual('X');
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.props().className).toEqual('square');
    });

    xit('Clicking on the square passes row and square props to handleClick', () => {
      wrapper.simulate('click');
      expect(clickSpy.calledOnce).toBe(true);
      expect(clickSpy.args[0].toEqual([0, 1]));
    });
  });

  describe('<Row />', () => {
    // TODO: Write a test to make sure a Row renders 3 Squares

  });

  describe('GameList', () => {
    // TODO: Write a test to make sure a GameList renders a <ul> with an <li>
    // for every item in its gameList array prop

  });
});
