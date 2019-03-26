import React from "react";

function WithLoading(getItems) {
  return function ListItemWithLoading(ListItems) {
    class ListItemWithLoading extends React.Component {
        
      state = {
        repos: null,
        loading: true
      };

      componentDidMount() {
        this.getItems();
      }

      getItems = async () => {
        const items = await getItems();

        this.setState({
          repos: items,
          loading: false
        });
      };

      render() {
        if (this.state.loading) {
          return <h4>Loading...</h4>;
        }
        return <ListItems data={this.state.repos} />;
      }
    }

    return ListItemWithLoading;
  };
}

export default WithLoading;
