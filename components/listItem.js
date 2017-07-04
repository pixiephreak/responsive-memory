import React from "react";

const ListItem = () => {
  // Rendering an li tag with props.children between the tags (grocery text)
  return (

      <div className="row">
        <div className="col-md-12">
            <ul>
              <li><img src=""/><div className="margin"><span className="student">Student Name</span></div><div className="github-info"><span className="follower">Followers</span><span className="repos">Repos</span></div></li>
              <li><img src=""/><div className="margin"><span className="student">Student Name</span></div><div className="github-info"><span className="follower">Followers</span><span className="repos">Repos</span></div></li>
              <li><img src=""/><div className="margin"><span className="student">Student Name</span></div><div className="github-info"><span className="follower">Followers</span><span className="repos">Repos</span></div></li>
            </ul>
            <ul>
              <li><img src=""/><div className="margin"><span className="student">Student Name</span></div><div className="github-info"><span className="follower">Followers</span><span className="repos">Repos</span></div></li>
              <li><img src=""/><div className="margin"><span className="student">Student Name</span></div><div className="github-info"><span className="follower">Followers</span><span className="repos">Repos</span></div></li>
              <li><img src=""/><div className="margin"><span className="student">Student Name</span></div><div className="github-info"><span className="follower">Followers</span><span className="repos">Repos</span></div></li>
            </ul>
            <ul>
              <li><img src=""/><div className="margin"><span className="student">Student Name</span></div><div className="github-info"><span className="follower">Followers</span><span className="repos">Repos</span></div></li>
              <li><img src=""/><div className="margin"><span className="student">Student Name</span></div><div className="github-info"><span className="follower">Followers</span><span className="repos">Repos</span></div></li>
              <li><img src=""/><div className="margin"><span className="student">Student Name</span></div><div className="github-info"><span className="follower">Followers</span><span className="repos">Repos</span></div></li>
            </ul>
        </div>
      </div>

  );
};

// Exporting this component as the default (only) export
export default ListItem;
