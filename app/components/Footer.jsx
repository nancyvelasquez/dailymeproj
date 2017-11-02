import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="content has-text-centered">
            <p>
                <strong>MeDaily</strong> by Nancy Velasquez. The source code is licensed
                <a href="http://opensource.org/licenses/mit-license.php"> MeDaily</a>.
            </p>
            </div>
        </div>
        </footer>
    );
  }
}

export default Footer;