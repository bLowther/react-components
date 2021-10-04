class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bold: false
    };
  }
  onListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  }
  render() {
    var style = {
      fontWeight: this.state.bold ? 'bold' : 'normal'
    };
    return (
      <li style={style} onMouseEnter={this.onListItemHover.bind(this)}
      onMouseLeave={this.onListItemHover.bind(this)}>
        {this.props.item}</li>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item => <GroceryListItem item = {item}/>)}
  </ul>
);
var list = ['coffee', 'beer']
ReactDOM.render(<GroceryList items={list}/>, document.getElementById("app"));


