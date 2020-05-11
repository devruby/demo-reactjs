import React, { Component } from 'react';

class SearchTable extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="col-lg-3">
                    <div className="form-group">
                        <label htmlFor="">Tên sản phẩm</label>
                        <input type="text" className="form-control" name="name"
                            placeholder="Nhập họ tên" />
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="form-group ">
                        <label htmlFor="">Trạng thái</label>
                        <select name="status" id="" className="form-control custom-select">
                            <option value="">Chọn</option>
                            <option value="1">ẩn</option>
                            <option value="2">hiện</option>
                        </select>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SearchTable;