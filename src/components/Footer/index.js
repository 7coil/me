import React, { Component } from 'react'
import PaddingContainer from '../PaddingContainer'
import SocialMediaHandles from '../SocialMediaHandles'
import * as styles from './index.module.scss'
import music from './music.json'

class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      song: null,
    }
  }
  getRandomSong() {
    return music[Math.floor(music.length * Math.random())]
  }
  componentDidMount() {
    const song = this.getRandomSong()
    this.setState({
      song,
    })
  }
  render() {
    const song = this.state.song
    return (
      <footer className={styles.footer}>
        <div className={styles.links}>
          <PaddingContainer>
            {song && (
              <div>
                <h2>Recommended Song</h2>
                <p>
                  You should probably listen to <b>{song.name}</b> by{' '}
                  <b>{song.artist}</b> in{' '}
                  {!song.album.toLowerCase().startsWith('the') && 'the '}
                  <b>{song.album}</b>
                  {!song.album.toLowerCase().endsWith('album') && ' album'}.
                </p>
                <iframe
                  src={`https://open.spotify.com/embed/track/${song.uri.replace(
                    'spotify:track:',
                    ''
                  )}`}
                  title="Spotify"
                  frameBorder="0"
                  allowTransparency="true"
                  allow="encrypted-media"
                  className={styles.spotifyEmbed}
                />
              </div>
            )}
            <SocialMediaHandles />
          </PaddingContainer>
        </div>
        <div className={styles.copyright}>
          <PaddingContainer>
            <p>
              <i>Copyright Leondro Lio, 2015 - 2021</i>
              <br />
              Website code licenced under the MIT licence.{' '}
              <a href="https://github.com/7coil/7coil">View it on GitHub</a>
            </p>
          </PaddingContainer>
        </div>
      </footer>
    )
  }
}

export default Footer
