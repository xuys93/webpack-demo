const greeter = () => {
    let el = document.createElement('div');
    el.textContent = '我是来测试热更新的。';
    return el;
}

module.exports = greeter;