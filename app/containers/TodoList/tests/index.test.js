import React from 'react';
import { shallow } from 'enzyme';

import { TodoList } from '../index';
import TodoItem from '../../../components/TodoItem';
import Spinner from '../../../components/Spinner';

describe('<TodoList />', () => {
  const disableLifecycleMethods = { disableLifecycleMethods: true };

  it('should render properly', () => {
    const component = shallow(<TodoList todos={[]} />, disableLifecycleMethods);
    expect(component).toMatchSnapshot();
  });

  it('should render correct amount of todos', () => {
    const testData = [{ id: 1, task: 'foo' }, { id: 2, task: 'bar' }];
    const component = shallow(
      <TodoList todos={testData} />,
      disableLifecycleMethods,
    );
    expect(component.find(TodoItem).length).toEqual(testData.length);
  });

  it('should render Spinner when loading', () => {
    const component = shallow(<TodoList loading />, disableLifecycleMethods);
    expect(component.contains(<Spinner />)).toEqual(true);
  });
});
