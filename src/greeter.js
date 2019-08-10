import React, { Component } from 'react';
import styles from './greeter.less';
import { hot } from 'react-hot-loader';

class Greeter extends Component {
    render() { 
        return (<div className={styles.test}>
            我是来测试babel的。很可以很厉害的。也是一样的
            <p>人生慢慢，及时行乐。。。哈哈哈</p>
        </div>);
    }
}
 
export default hot(module)(Greeter);