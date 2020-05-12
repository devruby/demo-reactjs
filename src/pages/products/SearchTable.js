import React, { Component } from 'react';

class SearchTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : '',
            status : -1,
        };
    }
    onChange = (event) => {
        
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({[name]: value});
        this.props.onReceiveSearch(
            name === 'name' ? value : this.state.name,
            name === 'status' ? value : this.state.status,
        );
    }
    render() {
        return (
            <React.Fragment>
                <div className="col-lg-3">
                    <div className="form-group">
                        <label htmlFor="">Tên sản phẩm</label>
                        <input type="text" className="form-control" value={this.state.name} name="name" onChange={this.onChange}
                            placeholder="Nhập họ tên" 
                           
                            />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="form-group ">
                        <label htmlFor="">Trạng thái</label>
                        <select value={this.state.status} className="form-control custom-select" name="status" onChange={this.onChange}>
                            <option  value={-1}>Chọn</option>
                            <option  value={0}>ẩn</option>
                            <option  value={1}>hiện</option>
                        </select>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchTable;