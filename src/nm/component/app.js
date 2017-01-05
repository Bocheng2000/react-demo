import React, { Component } from 'react';
import ServiceClient from '../../base/service/ServiceClient';
import PlayList from './PlayList';

export default class App extends Component {
  constructor(props) {
    super(props);

  }
  static defaultProps = {

      }

  static propTypes = {

      }

  state={
    playlists: []
}


async componentDidMount(){
    const result = await ServiceClient.getInstance().getAsyncUserPlayLists("135967740");
    this.setState({
      playlists:result
    });
    console.log(result);
  }

//每次状态改变的时候都会重新运行该方法
  render() {
    const {playlists}=this.state;
    console.log(playlists);
    return(
    	<div className="nm-app">
          <header>
            <div className="logo">
            </div>
            <h1>网易云音乐</h1>
          </header>
          <main>
            <aside>
                <PlayList playlists={playlists}/>
            </aside>
            <section>

            </section>
          </main>
          <footer>

          </footer>

      </div>
    	);
  }
}
