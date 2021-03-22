import React from "react";
import MetaTags from "react-meta-tags";

class Component1 extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <MetaTags>
          <title>Page 1</title>
          <meta
            name="description"
            content="Big business is World’s first and fastest-growing ecosystem for trustworthy businesses. Manage all your business finances and operations through big business applications and get a B score to join our ecosystem of trustworthy businesses."
          />
          <meta property="og:title" content="MyApp" />
          <meta property="og:image" content="path/to/image.jpg" />
        </MetaTags>
        <div className="content"> Some Content </div>
      </div>
    );
  }
}
