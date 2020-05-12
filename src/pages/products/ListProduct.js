import React, { Component } from 'react';

class ListProduct extends Component {
    render() {
        return (
            <React.Fragment>
                  <tr>
                        <th scope="row">{currentValue.id}</th>
                        <td>{currentValue.name}</td>
                        <td>{currentValue.status == 1 ? 'ẩn' : 'Hiện'}</td>
                        <td>
                            <Link to={`/product/form/${currentValue.id}`}
                                className="btn-light btn"> Chỉnh sửa</Link>
                            <button className="btn-dark btn"
                                onClick={() => _self.deleteProduct({ 'id': currentValue.id })}> Xóa
                            </button>
                        </td>
                    </tr>
            </React.Fragment>
        );
    }
}
export default ListProduct;