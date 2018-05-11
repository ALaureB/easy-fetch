import * as React from "react";

interface IProps {
  render: any;
  url: any;
}

interface IState {
  list: any;
  isLoading: any;
}

class List extends React.Component<IProps, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      list: []
    };
  }

  public fetch = async () => {
    const res = await fetch(this.props.url);
    const json = await res.json();
    // tslint:disable-next-line:no-console
    console.log(json);

    this.setState({
      list: json,
      // tslint:disable-next-line:object-literal-sort-keys
      isLoading: false
    });
  };

  public componentDidMount() {
    this.setState({ isLoading: true }, this.fetch);
  }

  public render() {
    return this.props.render(this.state);
  }
}

export default List;
