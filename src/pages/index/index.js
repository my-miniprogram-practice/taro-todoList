import Taro, { Component } from '@tarojs/taro';
import { View, Text, Input } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { actions as todoActions } from '../../redux/modules/todos';

import './index.scss';

class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  };

  constructor(props) {
    super(props);
    this.state = {
      newTodo: ''
    };
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  addTodo() {
    const { newTodo } = this.state;
    const { addTodo } = this.props;

    if (!newTodo) {
      return;
    }

    addTodo(newTodo);
    this.setState({
      newTodo: ''
    });
  }

  delTodo(id) {
    const { delTodo } = this.props;
    delTodo(id);
  }

  saveNewTodo(e) {
    const { newTodo } = this.state;
    const inputVal = e.target.value.trim();
    if (!inputVal || inputVal === newTodo) {
      return;
    }
    this.setState({
      newTodo: inputVal
    });
  }

  render() {
    let { newTodo } = this.state;
    const { todos } = this.props;
    return (
      <View className='index'>
        <Input className='input' type='text' value={newTodo} onInput={this.saveNewTodo.bind(this)} />
        <Text className='add' onClick={this.addTodo.bind(this)}>
          添加
        </Text>
        <View className='list_wrap'>
          <Text>Todo List</Text>
          {todos.map(todo => (
            <View key={todo.id} className='list'>
              <Text>
                {todo.id}.{todo.text}
              </Text>
              <Text className='del' onClick={this.delTodo.bind(this, todo.id)}>
                删除
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

function mapStateToProps({ todos }) {
  return {
    todos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo(data) {
      dispatch(todoActions.add(data));
    },
    delTodo(id) {
      dispatch(todoActions.del(id));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
