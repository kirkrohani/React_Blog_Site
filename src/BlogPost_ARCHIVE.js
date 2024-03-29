import React from 'react';
import './css/App.css';
import EditBlogButton from './EditBlogButton';


class BlogPostArchive extends React.Component {
  handleUpVote = () =>  {
    this.props.onVoteClick(this.props.post.id);
  }

  render () {
    const {imageUrl, url, title, description, submitterAvatarUrl, votes, id} = this.props.post;
    return (
      <div className="item">
        <div className="image">
          <img alt="Main blog post" src={imageUrl} />
        </div>
      
        <div className="middle aligned content">
          <div className="header">
            <a href={url}>{title}</a>
          </div>
          <div className="description">
            <p>{description}</p>
          </div>
          <div className="extra">
            <span>Submitted by: </span>
            <img alt= "posters avatar" src={submitterAvatarUrl} className="ui avatar image" />
            <a onClick={this.handleUpVote}>
              <i className="large caret up icon" />
            </a>
            {votes}
          </div>
          <div>
           <EditBlogButton key={`editButton-$id`} post={id} />
          </div>
          <hr />
          <br />
        </div>
      </div>
    );

  }
}

export default BlogPostArchive;