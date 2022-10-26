import React, { Component } from 'react';

class UserData extends Component {
  state = {
    isShow: true,
    bgColor1: 'MistyRose',
    bgColor2: 'LavenderBlush',
    bgColor3: 'Snow',
  };
  render() {
    const background =
      this.props.id % 3 === 0
        ? this.state.bgColor1
        : this.props.id % 3 === 1
        ? this.state.bgColor2
        : this.state.bgColor3;
    const { isShow } = this.state;

    return (
      isShow && (
        <tr
          className="UserData"
          // onClick={() => this.setState({ bgColor1: 'DarkKhaki', bgColor2: 'Khaki', bgColor3: 'LightYellow' })}
          onClick={() => this.setState({ bgColor1: 'DarkKhaki', bgColor2: 'DarkKhaki', bgColor3: 'DarkKhaki' })}
          onDoubleClick={() => this.setState({ isShow: !isShow })}
          style={{ backgroundColor: background }}
        >
          <td>{this.props.name}</td>
          <td>{this.props.email}</td>
          <td>{this.props.age}</td>
          <td>
            <button onClick={() => this.props.setName(this.props.name)}>Call My Name</button>
          </td>
        </tr>
      )
    );
  }
}

export default UserData;
