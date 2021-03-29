import React from 'react';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
class Footer extends React.Component {
  render() {
    const divStyle = {
      paddingTop: '30px', backgroundColor: '#000000', marginTop: '30px', paddingBottom: '30px',
      color: 'white', width: '100%', position: 'fixed',
    };
    return (
        <footer>
          <div style={divStyle} className="ui center aligned container">
            Peanut Gallery <br/>
            <hr/>
            University of Hawaii<br/>
            Honolulu, HI 96822 <br/>
            <a href='https://peanutgallery.github.io/'>Project Home Page</a>
          </div>
        </footer>
    );
  }
}

export default Footer;
