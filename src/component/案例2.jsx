import React from "react";
import { Input, Table, Space } from 'antd';

const { Search } = Input;
class App extends React.Component {
  
  onSearch = (name) => {
    if (name !== '') {
      this.setState({
        list: this.state.list.filter(item => item.name === name)
      })
    }

  }
  onChange = (e) => {
    if (e.target.value === '') {
      this.setState({
        list: [
          {
            id: 1,
            name: "吃饭",
            des: "干饭人干饭魂"
          },
          {
            id: 2,
            name: "睡觉",
            des: "不如睡觉写代码不如睡觉"
          },
          {
            id: 3,
            name: "打豆豆",
            des: "不如睡觉写代码不如睡觉"
          },
          {
            id: 4,
            name: "写vue代码",
            des: "不如睡觉写代码不如睡觉"
          }
        ]
      })
    }
  }
  handleDelete = (id) => {
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
  componentDidMount() {
    this.setState({
      list: [
        {
          id: 1,
          name: "吃饭",
          des: "干饭人干饭魂"
        },
        {
          id: 2,
          name: "睡觉",
          des: "不如睡觉写代码不如睡觉"
        },
        {
          id: 3,
          name: "打豆豆",
          des: "不如睡觉写代码不如睡觉"
        },
        {
          id: 4,
          name: "写vue代码",
          des: "不如睡觉写代码不如睡觉"
        }
      ]
    })
  }
  state = {
    list: [],
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
        key: 'des',
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a onClick={() => this.handleDelete(record.id)}>删除</a>
          </Space>
        ),
      }
    ]
  }

  render() {
    return (
      <div style={{ width: '500px', margin: 'auto', padding:'50px 0' }}>
        <Search
          placeholder="input search name"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
          onChange={this.onChange}
        />
        <Table dataSource={this.state.list.map(item => ({ ...item, key: item.id }))} columns={this.state.columns} />
      </div>
    );
  }

}

export default App;
