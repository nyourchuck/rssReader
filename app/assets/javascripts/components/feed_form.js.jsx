class FeedForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      description: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(e) {
    e.preventDefault();
    var self = this;
    if (this.validForm()) {
      $.ajax({
        url: '/api/feeds',
        method: 'POST',
        data: { feed: self.state },
        success: function(data) {
          self.props.handleAdd(data);
          self.setState({title: '', url: '', description: ''});
        },
        error: function(xhr, status, error) {
          alert('Unable to add new feed: ', error);
        }
      })
    } else {
      alert('Please enter all fields.');
    }
  }

  validForm() {
    if (this.state.title && this.state.url && this.state.description) {
      return true;
    } else {
      return false;
    }
  }

  handleInputChange(e) {
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  }

  render() {
    return (
      <form className="form-inline" onSubmit={this.handleAdd}>
        <div className="form-group">
          <input
            className="form-group"
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            className="form-group"
            type="text"
            name="url"
            placeholder="Url"
            value={this.state.url}
            onChange={this.handleInputChange}
          />
        </div>

        <div className="form-group">
          <input
            className="form-group"
            type="text"
            name="description"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleInputChange}
          />
        </div>

        <input type="submit" value="Add Feed" className="btn btn-primary" />
      </form>
    );
  }
}
