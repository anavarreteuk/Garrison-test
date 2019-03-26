import React from "react";

function WithExpand(quantityToShow) {
  return function WithExpandComponent(ListItems) {
    class ListItemExpanded extends React.Component {
        
      state = {
        expanded: false
      };

      handleOnClickToExpand = () => {
        this.setState({
          expanded: !this.state.expanded
        });
      };

      render() {
        const { data } = this.props;

        return (
          <div>
            <button onClick={this.handleOnClickToExpand}>
              {!this.state.expanded ? "Show more" : "Show less"}
            </button>
            <ListItems
              data={this.state.expanded ? data : data.slice(0, quantityToShow)}
            />
          </div>
        );
      }
    }
    return ListItemExpanded;
  };
}
export default WithExpand;
