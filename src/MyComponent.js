import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         number: 0
    //     }
    // }
    state={ // 위의 constructor를 현재 처럼 정의할 수 있음
        number: 0
    }
    static defaultProps={
        name: 'default name'
    }
    static propTypes={
        name: PropTypes.string,
        age: PropTypes.number.isRequired // 숫자 필수
    }
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                <p>{this.state.number}</p>
                <button onClick={()=>{
                // 1. 이벤트 이름은 camelCase ex) onClick
                // 2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달
                // 3. DOM 요소(div, button, input, span)에만 이벤트를 설정할 수 있다
                    this.setState({
                        number: this.state.number+1
                    })
                }
                }>더하기</button>
            </div>
        );
    }
}

export default MyComponent;