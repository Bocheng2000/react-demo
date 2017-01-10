import React, { Component } from 'react';

export default class TrackTable extends Component {

    constructor (props) {
        super(props);
    }

    static defaultProps = {

    }

    static propTypes = {

    }

    state = {

    }

    componentDidMount()
    {

    }

    render()
    {
      // debugger
      const tracks = this.props.selectedPlayList ? this.props.selectedPlayList.tracks : [];
      const playListResult = this.props.selectedPlayList ? this.props.selectedPlayList : {};
      console.log(playListResult)
        return(
          <div className="nm-track-table">
            <table className="track-table">
                <thead>

                  {/* <tr>
                    <td><img className="nm-playlist-img" src={playListResult.coverImgUrl}/></td>
                    <td className="gedan">歌单:{playListResult["name"]}</td>
                    <td><img className="tuxiang" src={playListResult.creator && playListResult.creator.avatarUrl}/></td>
                    <td className="biaoqian">标签</td>
                    <td className="jianjie">简介</td>
                  </tr> */}

                  <div className="nm-right-container">
                    <img className="nm-playlist-img" src={playListResult.coverImgUrl}/>
                    <span className="gedan">歌单: {playListResult["name"]}</span>
                    <img className="tuxiang" src={playListResult.creator && playListResult.creator.avatarUrl}/>
                    <span className="biaoqian">标签</span>
                    <span className="jianjie">简介</span>

                  </div>


                  <tr>
                   <td>音乐标题</td>
                   <td>歌手</td>
                   <td>专辑</td>
                   <td>时长</td>
                 </tr>
                </thead>
                <tbody>
                  {tracks.map(item =>{
                    return (
                      <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item["artists"][0].name}</td>
                        <td>{item["album"].name}</td>
                        <td>{item["bMusic"].playTime}</td>
                      </tr>
                    )
                  })}





                </tbody>
            </table>

          </div>
        )
    }
}
