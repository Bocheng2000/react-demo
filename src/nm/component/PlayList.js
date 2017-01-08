import React, { Component } from 'react';

export default class PlayList extends Component{
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    //自定义方法必须bind this.才能在方法正确使用this

    //箭头函数里的this指的是 外面一层的this
    //function里的this调用的话指全局的window
  }

  static defaultProps={
  }
  static propTypes={
  }
  state={
    selectedId:null
  }
  componentDidMount(){

  }

//处理默认选择第一个音乐集
  componentWillReceiveProps(nextProp){
    if (this.state.selectedId === null && nextProp.playlists.length > 0) {
      this.handleClick(nextProp.playlists[0].id);
    }
  }

  //点击事件
  handleClick(id){
    if (id !== this.state.selectedId) {
      this.setState({
        selectedId:id
      });
      this.props.onClick(id);

    }

  }

  render(){
    const {playlists}=this.props;
    // console.log("playlists",playlists);
    const selectedId = this.state.selectedId;

    // const liArr = playlists.map(item => {
    //     let selectedClass = "";
    //     selectedClass = item.id === selectedId ? "selected" : "";
    //     return (
    //       <li key={item.id} onClick={() => this.handleClick(item.id)} className = {selectedClass}>
    //         <span className="iconfont icon-music"></span>
    //         <span className="text">{item.name}</span>
    //       </li>
    //     )
    // });

    return (
      <ul className="nm-play-list">
        {/* {liArr} */}
        {playlists.map(item => {
            let selectedClass = "";
            selectedClass = item.id === selectedId ? "selected" : "";
            return (
              <li key={item.id} onClick={() => this.handleClick(item.id)} className = {selectedClass}>
                <span className="iconfont icon-music"></span>
                <span className="text">{item.name}</span>
              </li>
            )
        })}
      </ul>
    );

  }
}
