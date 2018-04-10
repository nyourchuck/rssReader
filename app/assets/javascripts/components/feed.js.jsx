class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.feed;
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  getInitialState() {
    return { edit: false };
  }

  handleDelete(e) { 
    e.preventDefault();
    var props = this.props;
    $.ajax({
      method: 'DELETE',
      url: '/api/feeds/' + props.feed.id,
      success: function(data) {
        props.deleteFromParent(props.feed);
      },
      error: function(xhr, status, error) {
        alert('Unable to delete requested record: ', error);
      }
    });
  }

  toggleEdit(e) {
    e.preventDefault();
    this.setState({ edit: !this.state.edit });
  }

  handleUpdate(e) {
    e.preventDefault();
    if (this.validRecord()) {
      var feed_data = {
        title: this.title.value,
        url: this.url.value,
        description: this.description.value
      };

      $.ajax({
        method: 'PUT',
        url: '/api/feeds/' + this.props.feed.id,
        data: { feed: feed_data },
        success: function(data) {
          this.setState(data);
          this.setState({ edit: false });
        }.bind(this),
        error: function(xhr, status, error) {
          alert('Cannot update requested record: ', error);
        }
      });
    } else {
      alert('Please fill all fields.');
    }
  }

  validRecord() {
    if (this.title && this.url && this.description) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    if (this.state.edit) {
      return(this.renderForm());
    } else {
      return(this.renderRecord());
    }
  }

  renderRecord() {
    return(
      <tr>
        <td className="feedTitle">
          <a href={this.state.url}>{this.state.title}</a>
          <p className={this.state.status}>
            {this.state.status_details}
          </p>
        </td>
        <td>{this.state.description}</td>
        <td>
          <a className="fa fa-trash" onClick={this.handleDelete} />
          &nbsp;
          <a className="fa fa-edit" onClick={this.toggleEdit} />
        </td>
      </tr>
    )
  }

  renderForm() {
    return(
      <tr className="editFeedEntryForm">
        <td>
          <input name="title"
                 defaultValue={this.state.title}
                 className="form-control"
                 type="text"
                 ref={(c) => this.title = c}
          />
          <input name="url"
                 defaultValue={this.state.url}
                 className="form-control"
                 type="text"
                 ref={(c) => this.url = c}
          />
        </td>
        <td>
          <input name="description"
                 defaultValue={this.state.description}
                 className="form-control"
                 type="text"
                 ref={(c) => this.description = c}
          />
        </td>
        <td>
          <button className="btn btn-success btn-sm"
             onClick={this.handleUpdate}>
            Save
          </button>
          <button className="btn btn-default btn-sm"
             onClick={this.toggleEdit} >
            Cancel
          </button>
        </td>
      </tr>
    );
  }
}
