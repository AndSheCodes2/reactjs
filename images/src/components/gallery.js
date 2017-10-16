import React, { Component } from 'react';
import axios from 'axios';
import Figure from './figure';

class Gallery extends Component {
  constructor () {
    super();
    this.state = {
      images: [],
      imagesToDisplay: [],
      tags: []
    };
    this.tagChange = this.tagChange.bind(this);
  }
  componentWillMount () {
    axios.get('http://gsx2json.com/api?id=1wZa0Gx2yAFDyMVayzRn428SDXCOJHOL-0_IX9uLiWW0')
      .then(response => {
        const tags = Array.from(new Set(response.data.columns.tag));
        this.setState({
          images: response.data.rows,
          tags: tags,
          imagesToDisplay: response.data.rows
        });
      }).catch(err => {
        console.log(err);
      })
  }

  tagChange(event) {
    const allImages = this.state.images;
    const filteredImages = allImages.filter(eachImage => eachImage.tag === event.target.value);
    this.setState({imagesToDisplay: filteredImages});
  }

  render() {
    return (
      <div>
        <h2>Gallery Component</h2>
        <div>
          <select onChange={this.tagChange}>
            <option value="">Select tag to filter</option>
            {this.state.tags.map((eachTag, key) => <option key={key} value={eachTag}>{eachTag}</option> )}
          </select>

        </div>
        <div className="gallery-wrapper">
        {
          this.state.imagesToDisplay.map((eachImage, index)=> {
            return (
              <Figure
                imageUrl={eachImage.image}
                description={eachImage.description}
                tag={eachImage.tag}
                date={eachImage.date}
                key={index}
              />
            )
          })
        }
        </div>
      </div>
    )
  }
}

export default Gallery;
