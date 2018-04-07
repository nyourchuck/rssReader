class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.feed;
  }

  render() {
    return(
      <tr>
        <td><Link to={this.state.url}>{this.state.title}</Link></td>
        <td>{this.state.description}</td>
      </tr>
    )
  }
}
